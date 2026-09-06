window.SONG_HEY_BOY = {
    title: "Hey Boy (feat. Burna Boy)",
    audioSrc: "hey_boy.mp3",
    lyrics: [
        // Entrada inmediata al cantar "Hey boy..."
        { start: 0.2, end: 7.5, text: "Hey chico... ¿no quieres venir conmigo?", isChorus: false },
        { start: 7.6, end: 14.8, text: "No te lo pienses tanto, la noche recién empieza", isChorus: false },
        { start: 14.9, end: 21.5, text: "Mueve el cuerpo y siente el ritmo golpear", isChorus: false },
        { start: 21.6, end: 25.2, text: "Tengo justo lo que necesitas...", isChorus: false },

        // Pre-Coro
        { start: 25.3, end: 32.5, text: "Dime si estás listo, no me hagas esperar", isChorus: false },
        { start: 32.6, end: 39.5, text: "Porque esta noche no nos vamos a detener...", isChorus: false },

        // CORO 1 - Sia
        { start: 39.6, end: 46.8, text: "¡HEY CHICO! VOY TRAS DE TI...", isChorus: true },
        { start: 46.9, end: 54.2, text: "¡HEY CHICO! DAME TODO LO QUE TIENES!", isChorus: true },
        { start: 54.3, end: 61.5, text: "No te escapes ahora, el juego acaba de empezar", isChorus: true },
        { start: 61.6, end: 68.8, text: "¡HEY CHICO! ¡SABES QUE ME GUSTA ASÍ!", isChorus: true },

        // Verso 2 - Burna Boy
        { start: 68.9, end: 76.2, text: "(Burna Boy) Sígueme el paso si puedes aguantar", isChorus: false },
        { start: 76.3, end: 83.5, text: "Bailando pegado, sintiendo el calor quemar", isChorus: false },
        { start: 83.6, end: 90.8, text: "Desde África hasta el mundo, nadie lo hace igual", isChorus: false },
        { start: 90.9, end: 98.2, text: "Deja que el ritmo tome el control total...", isChorus: false },

        // Pre-Coro 2
        { start: 98.3, end: 105.5, text: "No mires atrás, el momento es ahora", isChorus: false },
        { start: 105.6, end: 112.8, text: "Sube la energía, ¡que retumbe la pista!", isChorus: false },

        // CORO 2
        { start: 112.9, end: 120.2, text: "¡HEY CHICO! VOY TRAS DE TI...", isChorus: true },
        { start: 120.3, end: 127.5, text: "¡HEY CHICO! DAME TODO LO QUE TIENES!", isChorus: true },
        { start: 127.6, end: 134.8, text: "No te escapes ahora, el juego acaba de empezar", isChorus: true },
        { start: 134.9, end: 142.2, text: "¡HEY CHICO! ¡SABES QUE ME GUSTA ASÍ!", isChorus: true },

        // Puente Rítmico
        { start: 142.3, end: 149.5, text: "♪ (Solo de Percusión / Drop) ♪", isChorus: false },
        { start: 149.6, end: 156.8, text: "Muévete, siéntelo... no lo dejes caer", isChorus: false },

        // CORO FINAL CLÍMAX
        { start: 156.9, end: 164.2, text: "¡HEY CHICO! ¡ESTO ES PARA SIEMPRE!", isChorus: true },
        { start: 164.3, end: 171.5, text: "¡DAME TODO LO QUE TIENES HASTA EL FINAL!", isChorus: true },
        { start: 171.6, end: 174.0, text: "♪ Hey boy... ¡Fin! ♪", isChorus: true }
    ],
    chart: [
        // Comienza directo en 0.4s con la voz
        { time: 0.4, dur: 1.5, lane: 2 }, // HOLD inicial: "Hey boy..."
        { time: 2.8, dur: 0.2, lane: 1 }, { time: 3.4, dur: 0.2, lane: 2 }, { time: 4.0, dur: 0.2, lane: 3 },
        { time: 4.8, dur: 0.2, lane: 1 }, { time: 5.6, dur: 1.4, lane: 0 },

        // Verso 1
        { time: 7.8, dur: 0.2, lane: 0 }, { time: 8.3, dur: 0.2, lane: 1 }, { time: 8.8, dur: 0.2, lane: 2 },
        { time: 9.6, dur: 0.2, lane: 3 }, { time: 10.2, dur: 1.2, lane: 1 },
        { time: 12.0, dur: 0.2, lane: 0 }, { time: 12.5, dur: 0.2, lane: 2 }, { time: 13.0, dur: 0.2, lane: 1 },
        { time: 13.8, dur: 1.3, lane: 3 },
        { time: 15.4, dur: 0.2, lane: 2 }, { time: 15.9, dur: 0.2, lane: 0 }, { time: 16.4, dur: 0.2, lane: 1 },
        { time: 17.2, dur: 0.2, lane: 3 }, { time: 17.8, dur: 1.2, lane: 2 },
        { time: 19.5, dur: 0.2, lane: 1 }, { time: 20.0, dur: 0.2, lane: 0 }, { time: 20.5, dur: 0.2, lane: 2 },
        { time: 21.2, dur: 1.4, lane: 3 },
        { time: 23.0, dur: 0.2, lane: 1 }, { time: 23.5, dur: 0.2, lane: 2 }, { time: 24.0, dur: 0.2, lane: 0 },

        // Pre-Coro
        { time: 25.5, dur: 0.2, lane: 0 }, { time: 26.0, dur: 0.2, lane: 2 }, { time: 26.5, dur: 0.2, lane: 1 },
        { time: 27.0, dur: 0.2, lane: 3 }, { time: 27.8, dur: 1.2, lane: 2 },
        { time: 29.5, dur: 0.2, lane: 1 }, { time: 30.0, dur: 0.2, lane: 0 }, { time: 30.5, dur: 0.2, lane: 2 },
        { time: 31.0, dur: 0.2, lane: 3 }, { time: 31.8, dur: 1.4, lane: 1 },
        { time: 33.5, dur: 0.2, lane: 0 }, { time: 34.0, dur: 0.2, lane: 1 }, { time: 34.5, dur: 0.2, lane: 2 },
        { time: 35.0, dur: 0.2, lane: 3 }, { time: 35.6, dur: 0.2, lane: 2 }, { time: 36.2, dur: 0.2, lane: 1 },
        { time: 37.0, dur: 0.2, lane: 0 }, { time: 37.6, dur: 1.8, lane: 3 },

        // Coro 1
        { time: 39.8, dur: 0.2, lane: 0 }, { time: 40.3, dur: 0.2, lane: 3 }, { time: 40.8, dur: 1.5, lane: 2 },
        { time: 43.0, dur: 0.2, lane: 1 }, { time: 43.5, dur: 0.2, lane: 0 }, { time: 44.0, dur: 0.2, lane: 2 },
        { time: 44.8, dur: 0.2, lane: 3 }, { time: 45.4, dur: 1.2, lane: 1 },
        { time: 47.0, dur: 0.2, lane: 2 }, { time: 47.5, dur: 0.2, lane: 1 }, { time: 48.0, dur: 1.5, lane: 3 },
        { time: 50.2, dur: 0.2, lane: 0 }, { time: 50.7, dur: 0.2, lane: 2 }, { time: 51.2, dur: 0.2, lane: 1 },
        { time: 52.0, dur: 0.2, lane: 3 }, { time: 52.6, dur: 1.4, lane: 0 },
        { time: 54.5, dur: 0.2, lane: 2 }, { time: 55.0, dur: 0.2, lane: 1 }, { time: 55.5, dur: 0.2, lane: 3 },
        { time: 56.2, dur: 0.2, lane: 0 }, { time: 56.8, dur: 1.2, lane: 2 },
        { time: 58.5, dur: 0.2, lane: 1 }, { time: 59.0, dur: 0.2, lane: 3 }, { time: 59.5, dur: 0.2, lane: 0 },
        { time: 60.2, dur: 0.2, lane: 2 }, { time: 61.0, dur: 1.8, lane: 1 },
        { time: 63.2, dur: 0.2, lane: 3 }, { time: 63.8, dur: 0.2, lane: 2 }, { time: 64.4, dur: 0.2, lane: 1 },
        { time: 65.0, dur: 0.2, lane: 0 }, { time: 65.8, dur: 2.2, lane: 3 },

        // Verso 2 - Burna Boy
        { time: 69.0, dur: 0.2, lane: 1 }, { time: 69.6, dur: 0.2, lane: 2 }, { time: 70.2, dur: 0.2, lane: 0 },
        { time: 71.0, dur: 1.3, lane: 3 },
        { time: 73.0, dur: 0.2, lane: 2 }, { time: 73.6, dur: 0.2, lane: 1 }, { time: 74.2, dur: 0.2, lane: 3 },
        { time: 75.0, dur: 1.2, lane: 0 },
        { time: 77.0, dur: 0.2, lane: 3 }, { time: 77.6, dur: 0.2, lane: 2 }, { time: 78.2, dur: 0.2, lane: 1 },
        { time: 79.0, dur: 1.4, lane: 2 },
        { time: 81.0, dur: 0.2, lane: 0 }, { time: 81.6, dur: 0.2, lane: 1 }, { time: 82.2, dur: 0.2, lane: 3 },
        { time: 83.0, dur: 1.3, lane: 1 },
        { time: 85.0, dur: 0.2, lane: 2 }, { time: 85.5, dur: 0.2, lane: 0 }, { time: 86.0, dur: 0.2, lane: 3 },
        { time: 86.8, dur: 0.2, lane: 1 }, { time: 87.5, dur: 1.4, lane: 2 },
        { time: 89.5, dur: 0.2, lane: 0 }, { time: 90.0, dur: 0.2, lane: 2 }, { time: 90.5, dur: 0.2, lane: 1 },
        { time: 91.2, dur: 0.2, lane: 3 }, { time: 92.0, dur: 1.5, lane: 0 },
        { time: 94.0, dur: 0.2, lane: 1 }, { time: 94.6, dur: 0.2, lane: 2 }, { time: 95.2, dur: 0.2, lane: 3 },
        { time: 96.0, dur: 1.8, lane: 2 },

        // Pre-Coro 2
        { time: 98.5, dur: 0.2, lane: 0 }, { time: 99.0, dur: 0.2, lane: 1 }, { time: 99.5, dur: 0.2, lane: 2 },
        { time: 100.2, dur: 1.3, lane: 3 },
        { time: 102.0, dur: 0.2, lane: 2 }, { time: 102.5, dur: 0.2, lane: 1 }, { time: 103.0, dur: 0.2, lane: 0 },
        { time: 103.8, dur: 1.3, lane: 2 },
        { time: 105.5, dur: 0.2, lane: 1 }, { time: 106.0, dur: 0.2, lane: 3 }, { time: 106.5, dur: 0.2, lane: 2 },
        { time: 107.2, dur: 0.2, lane: 0 }, { time: 108.0, dur: 0.2, lane: 1 }, { time: 108.6, dur: 0.2, lane: 3 },
        { time: 109.4, dur: 0.2, lane: 2 }, { time: 110.2, dur: 2.2, lane: 0 },

        // Coro 2
        { time: 113.0, dur: 0.2, lane: 3 }, { time: 113.5, dur: 0.2, lane: 0 }, { time: 114.0, dur: 1.5, lane: 1 },
        { time: 116.0, dur: 0.2, lane: 2 }, { time: 116.5, dur: 0.2, lane: 1 }, { time: 117.0, dur: 0.2, lane: 3 },
        { time: 117.8, dur: 1.2, lane: 0 },
        { time: 119.5, dur: 0.2, lane: 1 }, { time: 120.0, dur: 0.2, lane: 2 }, { time: 120.5, dur: 1.5, lane: 3 },
        { time: 122.5, dur: 0.2, lane: 0 }, { time: 123.0, dur: 0.2, lane: 2 }, { time: 123.5, dur: 0.2, lane: 1 },
        { time: 124.2, dur: 1.4, lane: 2 },
        { time: 126.0, dur: 0.2, lane: 3 }, { time: 126.5, dur: 0.2, lane: 1 }, { time: 127.0, dur: 0.2, lane: 0 },
        { time: 127.8, dur: 1.2, lane: 2 },
        { time: 129.5, dur: 0.2, lane: 0 }, { time: 130.0, dur: 0.2, lane: 3 }, { time: 130.5, dur: 0.2, lane: 1 },
        { time: 131.2, dur: 1.8, lane: 2 },
        { time: 133.5, dur: 0.2, lane: 1 }, { time: 134.0, dur: 0.2, lane: 0 }, { time: 134.5, dur: 0.2, lane: 3 },
        { time: 135.2, dur: 0.2, lane: 2 }, { time: 136.0, dur: 2.5, lane: 1 },

        // Puente / Percusión
        { time: 142.5, dur: 0.2, lane: 0 }, { time: 143.0, dur: 0.2, lane: 2 }, { time: 143.5, dur: 0.2, lane: 1 },
        { time: 144.2, dur: 0.2, lane: 3 }, { time: 144.8, dur: 1.3, lane: 0 },
        { time: 146.5, dur: 0.2, lane: 2 }, { time: 147.0, dur: 0.2, lane: 1 }, { time: 147.5, dur: 0.2, lane: 3 },
        { time: 148.2, dur: 1.4, lane: 2 },
        { time: 150.0, dur: 0.2, lane: 1 }, { time: 150.5, dur: 0.2, lane: 0 }, { time: 151.0, dur: 0.2, lane: 2 },
        { time: 151.8, dur: 0.2, lane: 3 }, { time: 152.5, dur: 0.2, lane: 1 }, { time: 153.2, dur: 2.2, lane: 0 },

        // Coro Final Clímax
        { time: 157.0, dur: 0.2, lane: 3 }, { time: 157.5, dur: 0.2, lane: 1 }, { time: 158.0, dur: 1.6, lane: 2 },
        { time: 160.0, dur: 0.2, lane: 0 }, { time: 160.5, dur: 0.2, lane: 2 }, { time: 161.0, dur: 0.2, lane: 3 },
        { time: 161.8, dur: 1.3, lane: 1 },
        { time: 163.5, dur: 0.2, lane: 2 }, { time: 164.0, dur: 0.2, lane: 0 }, { time: 164.5, dur: 1.8, lane: 3 },
        { time: 166.8, dur: 0.2, lane: 1 }, { time: 167.4, dur: 0.2, lane: 2 }, { time: 168.0, dur: 0.2, lane: 0 },
        { time: 168.8, dur: 1.4, lane: 1 },
        { time: 170.5, dur: 0.2, lane: 3 }, { time: 171.0, dur: 0.2, lane: 2 }, { time: 171.5, dur: 0.2, lane: 1 },
        { time: 172.2, dur: 2.5, lane: 0 }
    ]
};
