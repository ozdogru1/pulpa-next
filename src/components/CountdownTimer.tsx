import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2025-10-10T10:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Gün', value: timeLeft.days },
        { label: 'Saat', value: timeLeft.hours },
        { label: 'Dakika', value: timeLeft.minutes },
        { label: 'Saniye', value: timeLeft.seconds },
    ];

    return (
        <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <div className="text-center mb-4">
                <h3 className="text-white text-xl font-bold mb-2">Erken Kayıt Sona Eriyor</h3>
                <p className="text-blue-100 text-sm">10 Ekim 2025, 10:00'a kadar %30 indirim!</p>
            </div>

            <div className="grid grid-cols-4 gap-3">
                {timeUnits.map((unit, index) => (
                    <motion.div
                        key={unit.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-2 border border-white/30">
                            <motion.div
                                className="text-white text-2xl md:text-3xl font-bold"
                                key={unit.value}
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {unit.value.toString().padStart(2, '0')}
                            </motion.div>
                        </div>
                        <div className="text-blue-100 text-xs font-medium uppercase tracking-wide">
                            {unit.label}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold inline-block">
                    🎯 Son Fırsat: %30 İndirim
                </div>
            </motion.div>
        </motion.div>
    );
}