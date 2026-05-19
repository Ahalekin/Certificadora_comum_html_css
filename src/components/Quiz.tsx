import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Circle } from "lucide-react";
import type { QuizQuestion } from "@/data/quizzes";

type Stage = "answering" | "review" | "results";

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz = ({ questions }: QuizProps) => {
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const [stage, setStage] = useState<Stage>("answering");

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  const { correctCount, percentage } = useMemo(() => {
    const correct = questions.reduce(
      (acc, q) => acc + (answers[q.id] === q.correctIndex ? 1 : 0),
      0
    );
    return {
      correctCount: correct,
      percentage: questions.length ? Math.round((correct / questions.length) * 100) : 0,
    };
  }, [answers, questions]);

  const handleSelect = (qid: string, idx: number) => {
    if (stage !== "answering") return;
    setAnswers((prev) => ({ ...prev, [qid]: idx }));
  };

  const reset = () => {
    setAnswers({});
    setStage("answering");
  };

  if (!questions.length) return null;

  return (
    <section className="mt-12 border-t border-border pt-10">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold">Quiz da aula</h2>
        {stage === "results" && (
          <span className="text-sm text-muted-foreground">
            {correctCount} de {questions.length} acertos · {percentage}%
          </span>
        )}
      </div>

      {stage === "results" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-lg bg-secondary border border-border"
        >
          <p className="text-sm text-muted-foreground mb-1">Seu resultado</p>
          <p className="text-3xl font-bold text-primary">
            {correctCount}/{questions.length}
            <span className="text-base text-muted-foreground font-normal ml-3">
              ({percentage}% de acerto)
            </span>
          </p>
        </motion.div>
      )}

      <div className="space-y-6">
        {questions.map((q, qi) => {
          const selected = answers[q.id];
          const isCorrect = selected === q.correctIndex;

          return (
            <div key={q.id} className="p-5 rounded-lg border border-border bg-card">
              <p className="font-medium mb-4">
                {qi + 1}. {q.question}
              </p>

              <div className="space-y-2">
                {q.options.map((opt, idx) => {
                  const isSelected = selected === idx;
                  const isAnswerKey = idx === q.correctIndex;

                  let className =
                    "flex items-start gap-3 px-4 py-3 rounded-md border transition-colors text-sm";
                  let icon = <Circle className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />;

                  if (stage === "answering") {
                    className += isSelected
                      ? " border-primary bg-primary/10 cursor-pointer"
                      : " border-border hover:bg-secondary cursor-pointer";
                    if (isSelected)
                      icon = <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />;
                  } else if (stage === "review") {
                    if (isSelected) {
                      className += " border-primary bg-primary/10";
                      icon = <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />;
                    } else {
                      className += " border-border opacity-60";
                    }
                  } else {
                    // results
                    if (isCorrect) {
                      // só mostra o verde no que acertou
                      if (isSelected) {
                        className += " border-green-600/50 bg-green-500/15";
                        icon = (
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                        );
                      } else {
                        className += " border-border opacity-50";
                      }
                    } else {
                      // errou: mostra todas, vermelho na escolhida e verde na correta
                      if (isSelected) {
                        className += " border-red-600/50 bg-red-500/15";
                        icon = <XCircle className="w-4 h-4 mt-0.5 text-red-500 shrink-0" />;
                      } else if (isAnswerKey) {
                        className += " border-green-600/50 bg-green-500/15";
                        icon = (
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                        );
                      } else {
                        className += " border-border opacity-60";
                      }
                    }
                  }

                  const Tag: "button" | "div" = stage === "answering" ? "button" : "div";

                  return (
                    <Tag
                      key={idx}
                      type={Tag === "button" ? "button" : undefined}
                      onClick={() => handleSelect(q.id, idx)}
                      className={`${className} w-full text-left`}
                    >
                      {icon}
                      <span>{opt}</span>
                    </Tag>
                  );
                })}
              </div>

              {stage === "results" && !isCorrect && selected === undefined && (
                <p className="text-xs text-muted-foreground mt-3">
                  Você não respondeu esta pergunta.
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-end gap-3 mt-8">
        {stage === "answering" && (
          <Button
            disabled={!allAnswered}
            onClick={() => setStage("results")}
          >
            Finalizar
          </Button>
        )}
        {stage === "results" && (
          <Button variant="outline" onClick={reset}>
            Refazer quiz
          </Button>
        )}
      </div>
    </section>
  );
};

export default Quiz;
