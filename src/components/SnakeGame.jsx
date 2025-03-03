import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

const SnakeGame = () => {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState(INITIAL_FOOD);
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const gameLoopRef = useRef();

    const generateFood = useCallback(() => {
        const newFood = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
        };
        // Make sure food doesn't spawn on snake
        if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
            return generateFood();
        }
        return newFood;
    }, [snake]);

    const resetGame = () => {
        setSnake(INITIAL_SNAKE);
        setFood(INITIAL_FOOD);
        setDirection(INITIAL_DIRECTION);
        setIsGameOver(false);
        setScore(0);
        setIsPaused(true);
    };

    const handleKeyPress = useCallback((e) => {
        if (isGameOver) return;

        const keyDirections = {
            ArrowUp: { x: 0, y: -1 },
            ArrowDown: { x: 0, y: 1 },
            ArrowLeft: { x: -1, y: 0 },
            ArrowRight: { x: 1, y: 0 },
        };

        if (keyDirections[e.key]) {
            e.preventDefault();
            const newDirection = keyDirections[e.key];
            // Prevent 180-degree turns
            if (direction.x !== -newDirection.x && direction.y !== -newDirection.y) {
                setDirection(newDirection);
            }
        }

        if (e.key === ' ') {
            setIsPaused(prev => !prev);
        }
    }, [direction, isGameOver]);

    const gameLoop = useCallback(() => {
        if (isPaused || isGameOver) return;

        setSnake(prevSnake => {
            const newHead = {
                x: (prevSnake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
                y: (prevSnake[0].y + direction.y + GRID_SIZE) % GRID_SIZE,
            };

            // Check for collision with self
            if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
                setIsGameOver(true);
                return prevSnake;
            }

            const newSnake = [newHead, ...prevSnake];

            // Check for food collision
            if (newHead.x === food.x && newHead.y === food.y) {
                setScore(prev => prev + 1);
                setFood(generateFood());
            } else {
                newSnake.pop();
            }

            return newSnake;
        });
    }, [direction, food, generateFood, isGameOver, isPaused]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    useEffect(() => {
        gameLoopRef.current = setInterval(gameLoop, GAME_SPEED);
        return () => clearInterval(gameLoopRef.current);
    }, [gameLoop]);

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        const touchStartX = touch.clientX;
        const touchStartY = touch.clientY;

        const handleTouchEnd = (e) => {
            const touch = e.changedTouches[0];
            const deltaX = touch.clientX - touchStartX;
            const deltaY = touch.clientY - touchStartY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal swipe
                if (deltaX > 0 && direction.x !== -1) setDirection({ x: 1, y: 0 });
                else if (deltaX < 0 && direction.x !== 1) setDirection({ x: -1, y: 0 });
            } else {
                // Vertical swipe
                if (deltaY > 0 && direction.y !== -1) setDirection({ x: 0, y: 1 });
                else if (deltaY < 0 && direction.y !== 1) setDirection({ x: 0, y: -1 });
            }

            document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center p-4 sm:p-8"
        >
            <div className="mb-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Snake Game</h2>
                <p className="text-secondary text-sm sm:text-base mb-4">
                    Score: {score} | {isPaused ? 'Paused' : 'Playing'}
                </p>
            </div>

            <div
                className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                style={{
                    width: GRID_SIZE * CELL_SIZE,
                    height: GRID_SIZE * CELL_SIZE,
                }}
                onTouchStart={handleTouchStart}
            >
                {/* Food */}
                <div
                    className="absolute bg-red-500 rounded-full"
                    style={{
                        width: CELL_SIZE - 2,
                        height: CELL_SIZE - 2,
                        left: food.x * CELL_SIZE,
                        top: food.y * CELL_SIZE,
                        margin: 1,
                    }}
                />

                {/* Snake */}
                {snake.map((segment, index) => (
                    <div
                        key={index}
                        className="absolute bg-green-500 rounded-sm"
                        style={{
                            width: CELL_SIZE - 2,
                            height: CELL_SIZE - 2,
                            left: segment.x * CELL_SIZE,
                            top: segment.y * CELL_SIZE,
                            margin: 1,
                        }}
                    />
                ))}

                {/* Game Over Overlay */}
                {isGameOver && (
                    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Game Over!</h3>
                            <p className="text-white mb-4">Final Score: {score}</p>
                            <button
                                onClick={resetGame}
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                            >
                                Play Again
                            </button>
                        </div>
                    </div>
                )}

                {/* Start Game Overlay */}
                {isPaused && !isGameOver && (
                    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                        <button
                            onClick={() => setIsPaused(false)}
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                        >
                            Start Game
                        </button>
                    </div>
                )}
            </div>

            <div className="mt-4 text-center text-secondary text-sm">
                <p>Use arrow keys to move | Space to pause</p>
                <p className="mt-1">Mobile: Swipe to change direction</p>
            </div>
        </motion.div>
    );
};

export default SnakeGame; 