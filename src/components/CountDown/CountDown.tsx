"use client"
import { FC, useEffect, useState } from 'react';
import { formatDuration, intervalToDuration, Duration } from 'date-fns';

type Props  = {
    startDate: Date;
    format: string[]
};
export const CountDown: FC<Props> = ({ startDate, format }) => {
    const [duration, setDuration] = useState<Duration>({});

    useEffect(() => {
        const timer = setInterval(() => {
            const duration = intervalToDuration({
                start: startDate,
                end: new Date(),
            });
            setDuration(duration);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [startDate]);

    return (
        <p className="text-4xl md:text-6xl font-extrabold">
            {formatDuration(duration, {
                format,
                delimiter: ":",
                zero: true,
                locale: { formatDistance: (_token: string, count: number) => String(count).padStart(2, '0') }
            })}
        </p>
    );
}