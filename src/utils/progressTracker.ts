export interface Progress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  chapterProgress: Record<string, number>;
}

export const getProgress = (): Progress => {
  const stored = localStorage.getItem('wiselearn_progress');
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    completedLessons: [],
    quizScores: {},
    chapterProgress: {},
  };
};

export const saveProgress = (progress: Progress) => {
  localStorage.setItem('wiselearn_progress', JSON.stringify(progress));
};

export const markLessonComplete = (lessonId: string) => {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    saveProgress(progress);
  }
};

export const saveQuizScore = (quizId: string, score: number) => {
  const progress = getProgress();
  progress.quizScores[quizId] = score;
  saveProgress(progress);
};

export const updateChapterProgress = (chapterId: string, percentage: number) => {
  const progress = getProgress();
  progress.chapterProgress[chapterId] = percentage;
  saveProgress(progress);
};
