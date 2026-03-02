import React, { useState, useEffect } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    IconButton,
    Container,
    Stack,
    Chip,
    Fade,
    FormControlLabel,
    Switch,
    LinearProgress,
    Paper,
    Grid
} from '@mui/material';
import PrevIcon from '@mui/icons-material/ArrowBackIosNew';
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import ShowIcon from '@mui/icons-material/Visibility';
import HideIcon from '@mui/icons-material/VisibilityOff';
import ResetIcon from '@mui/icons-material/Refresh';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import HomeIcon from '@mui/icons-material/Home';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { AZ900_STUDY_DATASET, StudyTerm } from './dataset/set1a';
import { AZ900_SCENARIO_QUESTIONS, AZ900ScenarioQuestion } from './dataset/set1b';
import { AZ900_SCENARIO_QUESTIONS_SETC } from './dataset/set1c';

// --- Components ---

const Flashcard: React.FC<{ card: StudyTerm; showAnswer: boolean; onToggle: () => void }> = ({ card, showAnswer, onToggle }) => {
    return (
        <Card
            sx={{
                minHeight: 400,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 4,
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                },
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
            }}
            onClick={onToggle}
        >
            <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <Chip
                    label={card.category}
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ mb: 3, fontWeight: 600 }}
                />

                <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 700, color: '#fff' }}>
                    {card.term}
                </Typography>

                <Box sx={{ mt: 4, minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Fade in={showAnswer}>
                        <Box>
                            <Typography variant="body1" sx={{ color: '#94a3b8', fontStyle: 'italic', mb: 2 }}>
                                {card.shortDefinition}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#cbd5e1', fontSize: '1.1rem' }}>
                                {card.explanation}
                            </Typography>
                            {card.example && (
                                <Typography variant="body2" sx={{ mt: 2, color: '#64748b', fontSize: '0.9rem' }}>
                                    <strong>Example:</strong> {card.example}
                                </Typography>
                            )}
                        </Box>
                    </Fade>
                    {!showAnswer && (
                        <Typography variant="h6" sx={{ color: '#64748b', opacity: 0.7 }}>
                            Click to reveal answer
                        </Typography>
                    )}
                </Box>
            </CardContent>

            <Chip
                label={card.difficulty}
                size="small"
                sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    opacity: 0.6,
                    textTransform: 'capitalize',
                    borderColor: card.difficulty === 'hard' ? 'error.main' : card.difficulty === 'medium' ? 'warning.main' : 'success.main',
                    color: card.difficulty === 'hard' ? 'error.main' : card.difficulty === 'medium' ? 'warning.main' : 'success.main',
                }}
                variant="outlined"
            />
        </Card>
    );
};

const ExamMode: React.FC<{ questions: AZ900ScenarioQuestion[]; onExit: () => void }> = ({ questions, onExit }) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    const question = questions[currentIdx];

    const handleAnswer = (idx: number) => {
        if (selectedOption !== null) return;
        setSelectedOption(idx);
        if (idx === question.correctAnswer) {
            setScore(s => s + 1);
        }
        setShowExplanation(true);
    };

    const handleNext = () => {
        if (currentIdx + 1 < questions.length) {
            setCurrentIdx(c => c + 1);
            setSelectedOption(null);
            setShowExplanation(false);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <Paper sx={{ p: 6, textAlign: 'center', background: '#1e293b', borderRadius: 4 }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, color: '#fff' }}>
                    Exam Complete!
                </Typography>
                <Typography variant="h2" sx={{ my: 4, color: percentage >= 70 ? 'success.main' : 'warning.main', fontWeight: 900 }}>
                    {percentage}%
                </Typography>
                <Typography variant="h6" sx={{ color: '#94a3b8', mb: 4 }}>
                    You scored {score} out of {questions.length} questions correctly.
                </Typography>
                <Button variant="contained" size="large" onClick={onExit} startIcon={<HomeIcon />}>
                    Back to Menu
                </Button>
            </Paper>
        );
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 1, fontWeight: 700 }}>
                    QUESTION {currentIdx + 1} OF {questions.length}
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={((currentIdx + 1) / questions.length) * 100}
                    sx={{ height: 8, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.05)' }}
                />
            </Box>

            <Card sx={{ p: 4, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', mb: 4 }}>
                <Chip label={question.category} size="small" color="secondary" sx={{ mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#94a3b8', mb: 2, fontStyle: 'italic' }}>
                    {question.scenario}
                </Typography>
                <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 4 }}>
                    {question.question}
                </Typography>

                <Stack spacing={2}>
                    {question.options.map((opt, i) => {
                        const isCorrect = i === question.correctAnswer;
                        const isSelected = i === selectedOption;
                        let color: "inherit" | "success" | "error" | "primary" = "primary";

                        if (selectedOption !== null) {
                            if (isCorrect) color = "success";
                            else if (isSelected) color = "error";
                            else color = "inherit";
                        }

                        return (
                            <Button
                                key={i}
                                variant={selectedOption !== null ? "contained" : "outlined"}
                                color={color}
                                onClick={() => handleAnswer(i)}
                                disabled={selectedOption !== null}
                                sx={{
                                    justifyContent: 'flex-start',
                                    textAlign: 'left',
                                    p: 2,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    borderColor: 'rgba(255,255,255,0.1)',
                                    '&.Mui-disabled': {
                                        color: selectedOption !== null ? '#fff' : 'rgba(255,255,255,0.3)',
                                        opacity: isCorrect || isSelected ? 1 : 0.5
                                    }
                                }}
                                startIcon={
                                    selectedOption !== null && isCorrect ? <CheckCircleIcon sx={{ color: '#4caf50' }} /> :
                                        selectedOption !== null && isSelected ? <CancelIcon sx={{ color: '#f44336' }} /> : null
                                }
                            >
                                {opt}
                            </Button>
                        );
                    })}
                </Stack>

                {showExplanation && (
                    <Fade in={showExplanation}>
                        <Box sx={{ mt: 4, p: 3, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2, borderLeft: '4px solid', borderColor: 'primary.main' }}>
                            <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                                <strong>Explanation:</strong> {question.explanation}
                            </Typography>
                        </Box>
                    </Fade>
                )}
            </Card>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    endIcon={<NextIcon />}
                >
                    {currentIdx + 1 === questions.length ? 'Finish Exam' : 'Next Question'}
                </Button>
            </Box>
        </Box>
    );
};

// --- Utilities ---
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// --- Main App ---

export default function App() {
    const [view, setView] = useState<'menu' | 'flashcards' | 'exam'>('menu');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState<AZ900ScenarioQuestion[]>([]);

    const totalCards = AZ900_STUDY_DATASET.length;

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalCards);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    const handleRandom = () => setCurrentIndex(Math.floor(Math.random() * totalCards));
    const handleToggle = () => setShowAnswer(!showAnswer);

    const startExam = (questions: AZ900ScenarioQuestion[]) => {
        setShuffledQuestions(shuffleArray(questions));
        setView('exam');
    };

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            {/* Header */}
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(to right, #60a5fa, #c084fc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em',
                    cursor: 'pointer'
                }} onClick={() => setView('menu')}>
                    AZ-900 Flashcards
                </Typography>
            </header>

            {/* Menu View */}
            {view === 'menu' && (
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                        <Card sx={{
                            p: 4, textAlign: 'center', cursor: 'pointer', height: '100%',
                            transition: 'hover 0.3s', '&:hover': { transform: 'scale(1.02)' },
                            background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)'
                        }} onClick={() => setView('flashcards')}>
                            <MenuBookIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>Study Flashcards</Typography>
                            <Typography variant="body2" sx={{ color: '#64748b' }}>
                                Review {AZ900_STUDY_DATASET.length} key terms and concepts for the Azure Fundamentals exam.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{
                            p: 4, textAlign: 'center', cursor: 'pointer', height: '100%',
                            transition: 'hover 0.3s', '&:hover': { transform: 'scale(1.02)' },
                            background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)'
                        }} onClick={() => startExam(AZ900_SCENARIO_QUESTIONS)}>
                            <QuizIcon sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>Practice Exam A</Typography>
                            <Typography variant="body2" sx={{ color: '#64748b' }}>
                                Test your knowledge with {AZ900_SCENARIO_QUESTIONS.length} scenario-based questions (Set A).
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{
                            p: 4, textAlign: 'center', cursor: 'pointer', height: '100%',
                            transition: 'hover 0.3s', '&:hover': { transform: 'scale(1.02)' },
                            background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)'
                        }} onClick={() => startExam(AZ900_SCENARIO_QUESTIONS_SETC as any)}>
                            <QuizIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>Practice Exam B</Typography>
                            <Typography variant="body2" sx={{ color: '#64748b' }}>
                                Test your knowledge with {AZ900_SCENARIO_QUESTIONS_SETC.length} scenario-based questions (Set B).
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            )}

            {/* Flashcard View */}
            {view === 'flashcards' && (
                <Stack spacing={4} alignItems="center">
                    <Box sx={{ textAlign: 'center' }}>
                        <FormControlLabel
                            control={<Switch checked={showAnswer} onChange={handleToggle} color="primary" />}
                            label={
                                <Typography variant="body2" sx={{ color: showAnswer ? 'primary.main' : '#64748b', fontWeight: 600 }}>
                                    {showAnswer ? 'ANSWERS REVEALED' : 'ANSWERS HIDDEN'}
                                </Typography>
                            }
                            sx={{ bgcolor: 'rgba(255,255,255,0.03)', px: 3, py: 0.5, borderRadius: 10 }}
                        />
                    </Box>

                    <Box sx={{ width: '100%', position: 'relative' }}>
                        <Flashcard card={AZ900_STUDY_DATASET[currentIndex]} showAnswer={showAnswer} onToggle={handleToggle} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, px: 2 }}>
                            <Stack direction="row" spacing={1}>
                                <IconButton onClick={handlePrev} size="large" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}><PrevIcon /></IconButton>
                                <IconButton onClick={handleNext} size="large" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}><NextIcon /></IconButton>
                            </Stack>
                            <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 600 }}>CARD {currentIndex + 1} OF {totalCards}</Typography>
                            <Button onClick={handleRandom} startIcon={<ResetIcon />} variant="outlined" size="small" sx={{ borderColor: 'rgba(255,255,255,0.1)', color: '#94a3b8' }}>Shuffle</Button>
                        </Box>
                    </Box>

                    <Button startIcon={<HomeIcon />} onClick={() => setView('menu')} sx={{ mt: 2, color: '#64748b' }}>Back to Menu</Button>
                </Stack>
            )}

            {/* Exam View */}
            {view === 'exam' && (
                <ExamMode questions={shuffledQuestions} onExit={() => setView('menu')} />
            )}
        </Container>
    );
}
