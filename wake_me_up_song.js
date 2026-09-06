window.SONG_WAKE_ME_UP = {
    title: "Wake Me Up - Avicii (4:07)",
    audioSrc: "wake_me_up.mp3",
    lyrics: [
        // Intro Acústica (0:00 - 0:15)
        { start: 0.0, end: 15.4, text: "♪ (Intro - Guitarra Acústica) ♪", isChorus: false },

        // Verso 1 (0:15 - 0:46)
        { start: 15.5, end: 23.2, text: "Abriéndome paso en la oscuridad, guiado por un corazón que late", isChorus: false },
        { start: 23.3, end: 31.0, text: "No sé dónde terminará el viaje, pero sé por dónde empezar", isChorus: false },
        { start: 31.1, end: 38.7, text: "Me dicen que soy demasiado joven para entender", isChorus: false },
        { start: 38.8, end: 46.4, text: "Dicen que estoy atrapado en una ilusión...", isChorus: false },

        // Coro 1 (0:46 - 1:17)
        { start: 46.5, end: 54.2, text: "¡ASÍ QUE DESPIÉRTAME CUANDO TODO ESTO TERMINE!", isChorus: true },
        { start: 54.3, end: 62.0, text: "¡CUANDO SEA MÁS SABIO Y MÁS VIEJO!", isChorus: true },
        { start: 62.1, end: 69.7, text: "Todo este tiempo estuve encontrándome a mí mismo...", isChorus: true },
        { start: 69.8, end: 1:17.4, text: "Y no sabía que estaba perdido...", isChorus: true },

        // Drop 1 EDM (1:17 - 1:48)
        { start: 1:17.5, end: 1:48.3, text: "♪ (Drop 1 - Sintetizadores) ♪", isChorus: true },

        // Verso 2 (1:48 - 2:19)
        { start: 1:48.4, end: 1:56.1, text: "Intenté cargar con el peso del mundo en mis hombros", isChorus: false },
        { start: 1:56.2, end: 2:03.8, text: "Pero solo tengo dos manos...", isChorus: false },
        { start: 2:03.9, end: 2:11.6, text: "Ojalá pudiera quedarme para siempre así de joven", isChorus: false },
        { start: 2:11.7, end: 2:19.3, text: "Sin miedo a cerrar los ojos ante lo que venga...", isChorus: false },

        // Coro 2 (2:19 - 2:50)
        { start: 2:19.4, end: 2:27.1, text: "¡DESPIÉRTAME CUANDO TODO ESTO TERMINE!", isChorus: true },
        { start: 2:27.2, end: 2:34.8, text: "¡CUANDO SEA MÁS SABIO Y MÁS VIEJO!", isChorus: true },
        { start: 2:34.9, end: 2:42.6, text: "Todo este tiempo estuve encontrándome a mí mismo...", isChorus: true },
        { start: 2:42.7, end: 2:50.3, text: "Y no sabía que estaba perdido...", isChorus: true },

        // Drop 2 EDM (2:50 - 3:21)
        { start: 2:50.4, end: 3:21.2, text: "♪ (Drop 2 - Baile Electrónico) ♪", isChorus: true },

        // Puente / Vocal Breakdown (3:21 - 3:52)
        { start: 3:21.3, end: 3:36.8, text: "No sabía que estaba perdido... No sabía que estaba perdido...", isChorus: false },
        { start: 3:36.9, end: 3:52.2, text: "¡DESPIÉRTAME CUANDO TODO ESTO TERMINE!", isChorus: true },

        // Outro Acústico (3:52 - 4:07)
        { start: 3:52.3, end: 4:07.0, text: "♪ (Outro Acústico - Final) ♪", isChorus: false }
    ],
    chart: [
        // Intro (0:00 - 0:15)
        { time: 1.9, dur: 0.2, lane: 0 }, { time: 3.8, dur: 0.2, lane: 1 }, { time: 5.8, dur: 0.2, lane: 2 },
        { time: 7.7, dur: 1.5, lane: 3 }, // HOLD
        { time: 9.6, dur: 0.2, lane: 2 }, { time: 11.6, dur: 0.2, lane: 1 }, { time: 13.5, dur: 1.5, lane: 0 },

        // Verso 1 (0:15 - 0:46)
        { time: 15.5, dur: 0.2, lane: 0 }, { time: 16.4, dur: 0.2, lane: 1 }, { time: 17.4, dur: 0.2, lane: 2 },
        { time: 18.4, dur: 1.4, lane: 3 },
        { time: 20.3, dur: 0.2, lane: 1 }, { time: 21.3, dur: 0.2, lane: 0 }, { time: 22.2, dur: 1.4, lane: 2 },
        { time: 24.2, dur: 0.2, lane: 0 }, { time: 25.1, dur: 0.2, lane: 2 }, { time: 26.1, dur: 1.4, lane: 1 },
        { time: 28.0, dur: 0.2, lane: 3 }, { time: 29.0, dur: 0.2, lane: 1 }, { time: 30.0, dur: 1.4, lane: 2 },
        { time: 31.9, dur: 0.2, lane: 0 }, { time: 32.9, dur: 0.2, lane: 1 }, { time: 33.8, dur: 1.4, lane: 3 },
        { time: 35.8, dur: 0.2, lane: 2 }, { time: 36.7, dur: 0.2, lane: 0 }, { time: 37.7, dur: 1.4, lane: 1 },
        { time: 39.6, dur: 0.2, lane: 0 }, { time: 40.6, dur: 0.2, lane: 2 }, { time: 41.6, dur: 0.2, lane: 3 },
        { time: 42.5, dur: 0.2, lane: 1 }, { time: 43.5, dur: 0.2, lane: 2 }, { time: 44.5, dur: 1.8, lane: 0 },

        // Coro 1 (0:46 - 1:17)
        { time: 46.5, dur: 0.2, lane: 0 }, { time: 47.4, dur: 0.2, lane: 2 }, { time: 48.4, dur: 0.2, lane: 1 },
        { time: 49.3, dur: 1.8, lane: 3 }, // HOLD
        { time: 52.2, dur: 0.2, lane: 1 }, { time: 53.2, dur: 0.2, lane: 0 }, { time: 54.2, dur: 1.8, lane: 2 },
        { time: 56.1, dur: 0.2, lane: 3 }, { time: 57.1, dur: 0.2, lane: 1 }, { time: 58.0, dur: 1.8, lane: 0 },
        { time: 60.0, dur: 0.2, lane: 2 }, { time: 60.9, dur: 0.2, lane: 3 }, { time: 61.9, dur: 1.8, lane: 1 },
        { time: 63.8, dur: 0.2, lane: 0 }, { time: 64.8, dur: 0.2, lane: 1 }, { time: 65.8, dur: 1.8, lane: 2 },
        { time: 67.7, dur: 0.2, lane: 3 }, { time: 68.7, dur: 0.2, lane: 2 }, { time: 69.6, dur: 3.0, lane: 1 },

        // Drop 1 EDM (1:17 - 1:48)
        { time: 73.5, dur: 0.2, lane: 0 }, { time: 74.0, dur: 0.2, lane: 2 }, { time: 74.5, dur: 0.2, lane: 1 },
        { time: 75.0, dur: 0.2, lane: 3 }, { time: 75.5, dur: 1.4, lane: 2 },
        { time: 77.4, dur: 0.2, lane: 1 }, { time: 77.9, dur: 0.2, lane: 0 }, { time: 78.4, dur: 0.2, lane: 2 },
        { time: 78.9, dur: 0.2, lane: 3 }, { time: 79.4, dur: 1.4, lane: 1 },
        { time: 81.3, dur: 0.2, lane: 3 }, { time: 81.8, dur: 0.2, lane: 1 }, { time: 82.3, dur: 0.2, lane: 2 },
        { time: 82.8, dur: 0.2, lane: 0 }, { time: 83.3, dur: 1.4, lane: 3 },
        { time: 85.2, dur: 0.2, lane: 2 }, { time: 85.7, dur: 0.2, lane: 0 }, { time: 86.2, dur: 0.2, lane: 1 },
        { time: 86.7, dur: 0.2, lane: 3 }, { time: 87.2, dur: 1.4, lane: 2 },
        { time: 89.1, dur: 0.2, lane: 0 }, { time: 89.6, dur: 0.2, lane: 1 }, { time: 90.1, dur: 0.2, lane: 2 },
        { time: 90.6, dur: 0.2, lane: 3 }, { time: 91.1, dur: 2.2, lane: 1 },
        { time: 93.0, dur: 0.2, lane: 2 }, { time: 93.5, dur: 0.2, lane: 0 }, { time: 94.0, dur: 0.2, lane: 3 },
        { time: 94.5, dur: 0.2, lane: 1 }, { time: 95.0, dur: 2.5, lane: 2 },

        // Verso 2 (1:48 - 2:19)
        { time: 104.5, dur: 0.2, lane: 0 }, { time: 105.5, dur: 0.2, lane: 1 }, { time: 106.4, dur: 1.4, lane: 2 },
        { time: 108.4, dur: 0.2, lane: 3 }, { time: 109.3, dur: 0.2, lane: 1 }, { time: 110.3, dur: 1.4, lane: 0 },
        { time: 112.2, dur: 0.2, lane: 2 }, { time: 113.2, dur: 0.2, lane: 3 }, { time: 114.2, dur: 1.4, lane: 1 },
        { time: 116.1, dur: 0.2, lane: 0 }, { time: 117.1, dur: 0.2, lane: 2 }, { time: 118.0, dur: 1.4, lane: 3 },
        { time: 120.0, dur: 0.2, lane: 1 }, { time: 121.0, dur: 0.2, lane: 0 }, { time: 121.9, dur: 1.8, lane: 2 },

        // Coro 2 (2:19 - 2:50)
        { time: 123.9, dur: 0.2, lane: 0 }, { time: 124.8, dur: 0.2, lane: 2 }, { time: 125.8, dur: 0.2, lane: 1 },
        { time: 126.7, dur: 1.8, lane: 3 }, // HOLD
        { time: 129.6, dur: 0.2, lane: 1 }, { time: 130.6, dur: 0.2, lane: 0 }, { time: 131.6, dur: 1.8, lane: 2 },
        { time: 133.5, dur: 0.2, lane: 3 }, { time: 134.5, dur: 0.2, lane: 1 }, { time: 135.4, dur: 1.8, lane: 0 },
        { time: 137.4, dur: 0.2, lane: 2 }, { time: 138.3, dur: 0.2, lane: 3 }, { time: 139.3, dur: 1.8, lane: 1 },
        { time: 141.2, dur: 0.2, lane: 0 }, { time: 142.2, dur: 0.2, lane: 1 }, { time: 143.2, dur: 1.8, lane: 2 },
        { time: 145.1, dur: 0.2, lane: 3 }, { time: 146.1, dur: 0.2, lane: 2 }, { time: 147.0, dur: 3.2, lane: 1 },

        // Drop 2 EDM (2:50 - 3:21)
        { time: 151.0, dur: 0.2, lane: 0 }, { time: 151.5, dur: 0.2, lane: 2 }, { time: 152.0, dur: 0.2, lane: 1 },
        { time: 152.5, dur: 0.2, lane: 3 }, { time: 153.0, dur: 1.4, lane: 2 },
        { time: 154.9, dur: 0.2, lane: 1 }, { time: 155.4, dur: 0.2, lane: 0 }, { time: 155.9, dur: 0.2, lane: 2 },
        { time: 156.4, dur: 0.2, lane: 3 }, { time: 156.9, dur: 1.4, lane: 1 },
        { time: 158.8, dur: 0.2, lane: 3 }, { time: 159.3, dur: 0.2, lane: 1 }, { time: 159.8, dur: 0.2, lane: 2 },
        { time: 160.3, dur: 0.2, lane: 0 }, { time: 160.8, dur: 1.4, lane: 3 },
        { time: 162.7, dur: 0.2, lane: 2 }, { time: 163.2, dur: 0.2, lane: 0 }, { time: 163.7, dur: 0.2, lane: 1 },
        { time: 164.2, dur: 0.2, lane: 3 }, { time: 164.7, dur: 1.4, lane: 2 },
        { time: 166.6, dur: 0.2, lane: 0 }, { time: 167.1, dur: 0.2, lane: 1 }, { time: 167.6, dur: 0.2, lane: 2 },
        { time: 168.1, dur: 0.2, lane: 3 }, { time: 168.6, dur: 2.5, lane: 1 },

        // Puente / Vocal Breakdown (3:21 - 3:52)
        { time: 172.5, dur: 0.2, lane: 0 }, { time: 174.4, dur: 0.2, lane: 1 }, { time: 176.3, dur: 1.5, lane: 2 },
        { time: 178.2, dur: 0.2, lane: 3 }, { time: 180.2, dur: 0.2, lane: 2 }, { time: 182.1, dur: 1.5, lane: 1 },
        { time: 184.0, dur: 0.2, lane: 0 }, { time: 185.0, dur: 0.2, lane: 1 }, { time: 186.0, dur: 0.2, lane: 2 },
        { time: 186.9, dur: 1.8, lane: 3 }, // HOLD
        { time: 189.8, dur: 0.2, lane: 1 }, { time: 190.8, dur: 0.2, lane: 0 }, { time: 191.8, dur: 1.8, lane: 2 },

        // Outro Acústico (3:52 - 4:07)
        { time: 193.7, dur: 0.2, lane: 0 }, { time: 195.6, dur: 0.2, lane: 2 }, { time: 197.6, dur: 0.2, lane: 1 },
        { time: 199.5, dur: 0.2, lane: 3 }, { time: 201.4, dur: 0.2, lane: 1 }, { time: 203.4, dur: 3.2, lane: 0 }
    ]
};
