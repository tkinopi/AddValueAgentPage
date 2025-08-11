import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  target: number;
  duration?: number;
}

function Counter({ target, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-japanese-primary mb-2">
      {count}
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-japanese-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <Counter target={800} />
            <p className="text-japanese-secondary font-medium">転職成功実績</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <Counter target={300} />
            <p className="text-japanese-secondary font-medium">採用支援企業数</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <Counter target={120} />
            <p className="text-japanese-secondary font-medium">SESエンジニア数</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Counter target={95} />
            <p className="text-japanese-secondary font-medium">顧客満足度（%）</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
