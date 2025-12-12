import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const [soundOn, setSoundOn] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());

            if (soundOn) {
                playTick();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [soundOn]);

    function playTick() {
        const audio = new AudioContext();
        const osc = audio.createOscillator();

        osc.frequency.setValueAtTime(800, audio.currentTime);
        osc.connect(audio.destination);

        osc.start();
        osc.stop(audio.currentTime + 0.07);
    }

    function format(n) {
        return String(n).padStart(2, "0");
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[62px] font-bold text-[#0301EF] mb-20 mt-20">Day 27 Digital Clock with Sound</h1>

            <div className="text-[122px] font-bold text-white">
                {format(time.getHours())}:
                {format(time.getMinutes())}:
                {format(time.getSeconds())}:
            </div>

            <button
                onClick={() => setSoundOn(!soundOn)}
                className={`px-4 py-2 rounded-lg font-medium transiton ${soundOn ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"}`}
            >
                {soundOn ? "Sound ON" : "Sound OFF"}
            </button>
        </div>
    )
}