window.SONG_DJ_SNAKE = {
    title: "DJ Snake - Let Me Love You (Hard ⚡)",
    audioSrc: "dj_snake.mp3",
    lyrics: [
        // Intro (0:00 - 0:18)
        { start: 0.0, end: 9.0, text: "♪ (Intro - Melodía Tropical) ♪", isChorus: false },
        { start: 9.1, end: 18.0, text: "Solía creer... solíamos pasar las noches en vela", isChorus: false },

        // Verso 1 (0:18 - 0:35)
        { start: 18.1, end: 26.5, text: "Buscando algo que nos mantuviera despiertos, nada nos derribaba", isChorus: false },
        { start: 26.6, end: 35.0, text: "Ahora estamos al borde del abismo, cayendo en picada...", isChorus: false },

        // Pre-Coro (0:35 - 0:51)
        { start: 35.1, end: 43.0, text: "No te rindas, no me dejes ir... ¡Aún nos queda fuego!", isChorus: false },
        { start: 43.1, end: 51.2, text: "Porque necesito a alguien que me sostenga... ¡NO TE RINDAS!", isChorus: false },

        // CORO & DROP 1 EXPERTO (0:51 - 1:24)
        { start: 51.3, end: 59.5, text: "¡DÉJAME AMARTE! ¡DÉJAME AMARTE!", isChorus: true },
        { start: 59.6, end: 68.0, text: "♪ (DROP 1 - RÁFAGAS RÍTMICAS) ♪", isChorus: true },
        { start: 68.1, end: 76.5, text: "¡DÉJAME AMARTE! (RITMO RÁPIDO)", isChorus: true },
        { start: 76.6, end: 85.0, text: "♪ (CADENCIA CONTINUA) ♪", isChorus: true },

        // Verso 2 (1:25 - 1:42)
        { start: 85.1, end: 93.5, text: "Solíamos beber del mismo vaso, riéndonos del destino", isChorus: false },
        { start: 93.6, end: 102.0, text: "Cruzando el desierto sin miedo a perder el camino...", isChorus: false },

        // Pre-Coro 2 (1:42 - 1:58)
        { start: 102.1, end: 110.5, text: "No te rindas, no me dejes ir... ¡La chispa sigue viva!", isChorus: false },
        { start: 110.6, end: 118.8, text: "¡NO ME DEJES IR, DÉJAME ENTRAR!", isChorus: false },

        // CORO & DROP 2 VIBRANTE (1:58 - 2:32)
        { start: 118.9, end: 127.2, text: "¡DÉJAME AMARTE! ¡DÉJAME AMARTE!", isChorus: true },
        { start: 127.3, end: 135.5, text: "♪ (DROP 2 - MÁXIMA VELOCIDAD) ♪", isChorus: true },
        { start: 135.6, end: 144.0, text: "¡DÉJAME AMARTE HASTA EL FINAL!", isChorus: true },
        { start: 144.1, end: 152.5, text: "♪ (CRUCE DE CARRILES) ♪", isChorus: true },

        // Puente / Desaceleración (2:32 - 2:50)
        { start: 152.6, end: 161.0, text: "No me dejes... no te rindas ahora...", isChorus: false },
        { start: 161.1, end: 170.0, text: "Cierra los ojos, siente la vibración subir...", isChorus: false },

        // DROP CLÍMAX TOTAL (2:50 - 3:28)
        { start: 170.1, end: 178.5, text: "¡DÉJAME AMARTE! (SOLO VIRTUAL)", isChorus: true },
        { start: 178.6, end: 187.0, text: "♪ (RÁFAGAS INTENSAS 16TH) ♪", isChorus: true },
        { start: 187.1, end: 195.5, text: "¡DÉJAME AMARTE HASTA QUE AMANEZCA!", isChorus: true },
        { start: 195.6, end: 208.0, text: "♪ (CLÍMAX FINAL DJ SNAKE) ♪", isChorus: true },

        // Outro (3:28 - 3:40)
        { start: 208.1, end: 220.0, text: "♪ Let me love you... ¡Fin de pista! ♪", isChorus: false }
    ],
    chart: [
        // Intro (0:00 - 0:18)
        { time: 1.0, dur: 0.2, lane: 0 }, { time: 1.6, dur: 0.2, lane: 1 }, { time: 2.2, dur: 0.2, lane: 2 },
        { time: 2.8, dur: 1.0, lane: 3 }, // HOLD
        { time: 4.2, dur: 0.2, lane: 2 }, { time: 4.8, dur: 0.2, lane: 1 }, { time: 5.4, dur: 0.2, lane: 0 },
        { time: 6.0, dur: 1.2, lane: 1 },
        { time: 7.6, dur: 0.2, lane: 3 }, { time: 8.2, dur: 0.2, lane: 2 }, { time: 8.8, dur: 0.2, lane: 1 },
        { time: 9.4, dur: 1.4, lane: 0 },
        { time: 11.2, dur: 0.2, lane: 1 }, { time: 11.8, dur: 0.2, lane: 2 }, { time: 12.4, dur: 0.2, lane: 3 },
        { time: 13.0, dur: 1.2, lane: 2 },
        { time: 14.6, dur: 0.2, lane: 0 }, { time: 15.2, dur: 0.2, lane: 1 }, { time: 15.8, dur: 0.2, lane: 2 },
        { time: 16.4, dur: 1.4, lane: 3 },

        // Verso 1 (0:18 - 0:35)
        { time: 18.2, dur: 0.2, lane: 0 }, { time: 18.7, dur: 0.2, lane: 2 }, { time: 19.2, dur: 0.2, lane: 1 },
        { time: 19.8, dur: 0.2, lane: 3 }, { time: 20.4, dur: 1.0, lane: 2 },
        { time: 21.8, dur: 0.2, lane: 1 }, { time: 22.3, dur: 0.2, lane: 0 }, { time: 22.8, dur: 0.2, lane: 3 },
        { time: 23.4, dur: 1.2, lane: 1 },
        { time: 24.8, dur: 0.2, lane: 2 }, { time: 25.3, dur: 0.2, lane: 1 }, { time: 25.8, dur: 0.2, lane: 0 },
        { time: 26.4, dur: 0.2, lane: 3 }, { time: 27.0, dur: 1.2, lane: 2 },
        { time: 28.4, dur: 0.2, lane: 0 }, { time: 28.9, dur: 0.2, lane: 1 }, { time: 29.4, dur: 0.2, lane: 2 },
        { time: 30.0, dur: 0.2, lane: 3 }, { time: 30.6, dur: 1.4, lane: 1 },
        { time: 32.2, dur: 0.2, lane: 2 }, { time: 32.7, dur: 0.2, lane: 0 }, { time: 33.2, dur: 0.2, lane: 3 },
        { time: 33.8, dur: 1.2, lane: 2 },

        // Pre-Coro con Redobles (0:35 - 0:51)
        { time: 35.2, dur: 0.2, lane: 0 }, { time: 35.6, dur: 0.2, lane: 1 }, { time: 36.0, dur: 0.2, lane: 2 },
        { time: 36.4, dur: 0.2, lane: 3 }, { time: 37.0, dur: 1.2, lane: 1 },
        { time: 38.4, dur: 0.2, lane: 3 }, { time: 38.8, dur: 0.2, lane: 2 }, { time: 39.2, dur: 0.2, lane: 1 },
        { time: 39.6, dur: 0.2, lane: 0 }, { time: 40.2, dur: 1.2, lane: 2 },
        { time: 41.8, dur: 0.2, lane: 0 }, { time: 42.2, dur: 0.2, lane: 2 }, { time: 42.6, dur: 0.2, lane: 1 },
        { time: 43.0, dur: 0.2, lane: 3 }, { time: 43.6, dur: 1.2, lane: 0 },
        // Aceleración hacia el drop (Semicorcheas continuas)
        { time: 45.0, dur: 0.2, lane: 1 }, { time: 45.3, dur: 0.2, lane: 2 }, { time: 45.6, dur: 0.2, lane: 3 },
        { time: 46.0, dur: 0.2, lane: 2 }, { time: 46.3, dur: 0.2, lane: 1 }, { time: 46.6, dur: 0.2, lane: 0 },
        { time: 47.0, dur: 0.2, lane: 1 }, { time: 47.3, dur: 0.2, lane: 2 }, { time: 47.6, dur: 0.2, lane: 3 },
        { time: 48.0, dur: 0.2, lane: 2 }, { time: 48.3, dur: 0.2, lane: 1 }, { time: 48.6, dur: 0.2, lane: 0 },
        { time: 49.0, dur: 0.2, lane: 3 }, { time: 49.4, dur: 0.2, lane: 2 }, { time: 49.8, dur: 1.4, lane: 1 },

        // CORO Y DROP 1 EXPERTO (0:51 - 1:24) - Ráfagas extremas
        { time: 51.4, dur: 0.2, lane: 0 }, { time: 51.7, dur: 0.2, lane: 2 }, { time: 52.0, dur: 0.2, lane: 1 },
        { time: 52.3, dur: 0.2, lane: 3 }, { time: 52.8, dur: 1.0, lane: 2 },
        { time: 54.0, dur: 0.2, lane: 3 }, { time: 54.3, dur: 0.2, lane: 1 }, { time: 54.6, dur: 0.2, lane: 2 },
        { time: 54.9, dur: 0.2, lane: 0 }, { time: 55.4, dur: 1.2, lane: 1 },
        { time: 56.8, dur: 0.2, lane: 0 }, { time: 57.1, dur: 0.2, lane: 1 }, { time: 57.4, dur: 0.2, lane: 2 },
        { time: 57.7, dur: 0.2, lane: 3 }, { time: 58.2, dur: 1.0, lane: 0 },
        { time: 59.4, dur: 0.2, lane: 2 }, { time: 59.7, dur: 0.2, lane: 3 }, { time: 60.0, dur: 0.2, lane: 1 },
        { time: 60.3, dur: 0.2, lane: 0 }, { time: 60.8, dur: 1.2, lane: 2 },
        // Cascada rápida de notas alternadas
        { time: 62.2, dur: 0.2, lane: 0 }, { time: 62.5, dur: 0.2, lane: 2 }, { time: 62.8, dur: 0.2, lane: 1 },
        { time: 63.1, dur: 0.2, lane: 3 }, { time: 63.5, dur: 0.2, lane: 2 }, { time: 63.8, dur: 0.2, lane: 0 },
        { time: 64.2, dur: 0.2, lane: 1 }, { time: 64.5, dur: 0.2, lane: 3 }, { time: 65.0, dur: 1.4, lane: 2 },
        { time: 66.8, dur: 0.2, lane: 3 }, { time: 67.1, dur: 0.2, lane: 1 }, { time: 67.4, dur: 0.2, lane: 2 },
        { time: 67.7, dur: 0.2, lane: 0 }, { time: 68.2, dur: 1.0, lane: 3 },
        { time: 69.4, dur: 0.2, lane: 1 }, { time: 69.7, dur: 0.2, lane: 2 }, { time: 70.0, dur: 0.2, lane: 0 },
        { time: 70.3, dur: 0.2, lane: 3 }, { time: 70.8, dur: 1.2, lane: 1 },
        { time: 72.2, dur: 0.2, lane: 2 }, { time: 72.5, dur: 0.2, lane: 0 }, { time: 72.8, dur: 0.2, lane: 3 },
        { time: 73.1, dur: 0.2, lane: 1 }, { time: 73.6, dur: 1.2, lane: 2 },
        { time: 75.0, dur: 0.2, lane: 0 }, { time: 75.3, dur: 0.2, lane: 2 }, { time: 75.6, dur: 0.2, lane: 1 },
        { time: 75.9, dur: 0.2, lane: 3 }, { time: 76.4, dur: 1.5, lane: 0 },
        { time: 78.2, dur: 0.2, lane: 1 }, { time: 78.6, dur: 0.2, lane: 2 }, { time: 79.0, dur: 0.2, lane: 3 },
        { time: 79.6, dur: 0.2, lane: 2 }, { time: 80.2, dur: 0.2, lane: 1 }, { time: 80.8, dur: 1.6, lane: 0 },

        // Verso 2 (1:25 - 1:42)
        { time: 85.2, dur: 0.2, lane: 0 }, { time: 85.8, dur: 0.2, lane: 2 }, { time: 86.4, dur: 0.2, lane: 1 },
        { time: 87.0, dur: 1.2, lane: 3 },
        { time: 88.6, dur: 0.2, lane: 1 }, { time: 89.2, dur: 0.2, lane: 0 }, { time: 89.8, dur: 0.2, lane: 2 },
        { time: 90.4, dur: 1.2, lane: 1 },
        { time: 92.0, dur: 0.2, lane: 2 }, { time: 92.6, dur: 0.2, lane: 3 }, { time: 93.2, dur: 0.2, lane: 0 },
        { time: 93.8, dur: 1.2, lane: 2 },
        { time: 95.4, dur: 0.2, lane: 3 }, { time: 96.0, dur: 0.2, lane: 1 }, { time: 96.6, dur: 0.2, lane: 2 },
        { time: 97.2, dur: 1.4, lane: 0 },

        // Pre-Coro 2 (1:42 - 1:58)
        { time: 102.2, dur: 0.2, lane: 0 }, { time: 102.6, dur: 0.2, lane: 1 }, { time: 103.0, dur: 0.2, lane: 2 },
        { time: 103.4, dur: 0.2, lane: 3 }, { time: 104.0, dur: 1.2, lane: 2 },
        { time: 105.4, dur: 0.2, lane: 3 }, { time: 105.8, dur: 0.2, lane: 2 }, { time: 106.2, dur: 0.2, lane: 1 },
        { time: 106.6, dur: 0.2, lane: 0 }, { time: 107.2, dur: 1.2, lane: 1 },
        // Aceleración intensa pre-drop
        { time: 108.6, dur: 0.2, lane: 0 }, { time: 108.9, dur: 0.2, lane: 1 }, { time: 109.2, dur: 0.2, lane: 2 },
        { time: 109.5, dur: 0.2, lane: 3 }, { time: 109.8, dur: 0.2, lane: 2 }, { time: 110.1, dur: 0.2, lane: 1 },
        { time: 110.4, dur: 0.2, lane: 0 }, { time: 110.7, dur: 0.2, lane: 2 }, { time: 111.0, dur: 0.2, lane: 3 },
        { time: 111.3, dur: 0.2, lane: 1 }, { time: 111.6, dur: 0.2, lane: 0 }, { time: 112.0, dur: 1.8, lane: 3 },

        // CORO Y DROP 2 (1:58 - 2:32)
        { time: 119.0, dur: 0.2, lane: 0 }, { time: 119.3, dur: 0.2, lane: 2 }, { time: 119.6, dur: 0.2, lane: 1 },
        { time: 119.9, dur: 0.2, lane: 3 }, { time: 120.4, dur: 1.2, lane: 2 },
        { time: 121.8, dur: 0.2, lane: 3 }, { time: 122.1, dur: 0.2, lane: 1 }, { time: 122.4, dur: 0.2, lane: 0 },
        { time: 122.7, dur: 0.2, lane: 2 }, { time: 123.2, dur: 1.0, lane: 1 },
        { time: 124.6, dur: 0.2, lane: 1 }, { time: 124.9, dur: 0.2, lane: 2 }, { time: 125.2, dur: 0.2, lane: 3 },
        { time: 125.5, dur: 0.2, lane: 0 }, { time: 126.0, dur: 1.2, lane: 2 },
        { time: 127.4, dur: 0.2, lane: 0 }, { time: 127.7, dur: 0.2, lane: 1 }, { time: 128.0, dur: 0.2, lane: 3 },
        { time: 128.3, dur: 0.2, lane: 2 }, { time: 128.8, dur: 1.0, lane: 0 },
        { time: 130.2, dur: 0.2, lane: 2 }, { time: 130.5, dur: 0.2, lane: 0 }, { time: 130.8, dur: 0.2, lane: 1 },
        { time: 131.1, dur: 0.2, lane: 3 }, { time: 131.6, dur: 1.2, lane: 1 },
        { time: 133.0, dur: 0.2, lane: 3 }, { time: 133.3, dur: 0.2, lane: 2 }, { time: 133.6, dur: 0.2, lane: 0 },
        { time: 133.9, dur: 0.2, lane: 1 }, { time: 134.4, dur: 1.0, lane: 2 },
        { time: 135.8, dur: 0.2, lane: 1 }, { time: 136.1, dur: 0.2, lane: 3 }, { time: 136.4, dur: 0.2, lane: 2 },
        { time: 136.7, dur: 0.2, lane: 0 }, { time: 137.2, dur: 1.4, lane: 3 },
        { time: 139.0, dur: 0.2, lane: 2 }, { time: 139.4, dur: 0.2, lane: 1 }, { time: 139.8, dur: 0.2, lane: 0 },
        { time: 140.2, dur: 0.2, lane: 3 }, { time: 140.8, dur: 1.6, lane: 2 },

        // Puente Rítmico (2:32 - 2:50)
        { time: 152.8, dur: 0.2, lane: 0 }, { time: 153.6, dur: 0.2, lane: 1 }, { time: 154.4, dur: 1.2, lane: 2 },
        { time: 156.0, dur: 0.2, lane: 3 }, { time: 156.8, dur: 0.2, lane: 2 }, { time: 157.6, dur: 1.4, lane: 1 },
        { time: 159.2, dur: 0.2, lane: 0 }, { time: 160.0, dur: 0.2, lane: 2 }, { time: 160.8, dur: 1.2, lane: 3 },
        { time: 162.4, dur: 0.2, lane: 1 }, { time: 163.2, dur: 0.2, lane: 0 }, { time: 164.0, dur: 1.8, lane: 2 },

        // GRAN DROP CLÍMAX (2:50 - 3:28) - Máxima dificultad y velocidad
        { time: 170.2, dur: 0.2, lane: 0 }, { time: 170.5, dur: 0.2, lane: 1 }, { time: 170.8, dur: 0.2, lane: 2 },
        { time: 171.1, dur: 0.2, lane: 3 }, { time: 171.4, dur: 0.2, lane: 2 }, { time: 171.7, dur: 0.2, lane: 1 },
        { time: 172.0, dur: 0.2, lane: 0 }, { time: 172.4, dur: 1.2, lane: 3 },
        { time: 174.0, dur: 0.2, lane: 3 }, { time: 174.3, dur: 0.2, lane: 2 }, { time: 174.6, dur: 0.2, lane: 1 },
        { time: 174.9, dur: 0.2, lane: 0 }, { time: 175.2, dur: 0.2, lane: 1 }, { time: 175.5, dur: 0.2, lane: 2 },
        { time: 175.8, dur: 0.2, lane: 3 }, { time: 176.2, dur: 1.4, lane: 0 },
        { time: 178.0, dur: 0.2, lane: 1 }, { time: 178.3, dur: 0.2, lane: 2 }, { time: 178.6, dur: 0.2, lane: 0 },
        { time: 178.9, dur: 0.2, lane: 3 }, { time: 179.2, dur: 0.2, lane: 2 }, { time: 179.5, dur: 0.2, lane: 1 },
        { time: 179.8, dur: 0.2, lane: 0 }, { time: 180.2, dur: 1.2, lane: 2 },
        { time: 182.0, dur: 0.2, lane: 0 }, { time: 182.3, dur: 0.2, lane: 3 }, { time: 182.6, dur: 0.2, lane: 1 },
        { time: 182.9, dur: 0.2, lane: 2 }, { time: 183.2, dur: 0.2, lane: 0 }, { time: 183.5, dur: 0.2, lane: 3 },
        { time: 183.8, dur: 0.2, lane: 1 }, { time: 184.2, dur: 1.4, lane: 2 },
        { time: 186.0, dur: 0.2, lane: 2 }, { time: 186.3, dur: 0.2, lane: 0 }, { time: 186.6, dur: 0.2, lane: 3 },
        { time: 186.9, dur: 0.2, lane: 1 }, { time: 187.2, dur: 0.2, lane: 2 }, { time: 187.5, dur: 0.2, lane: 0 },
        { time: 187.8, dur: 0.2, lane: 3 }, { time: 188.2, dur: 1.2, lane: 1 },
        { time: 190.0, dur: 0.2, lane: 3 }, { time: 190.3, dur: 0.2, lane: 1 }, { time: 190.6, dur: 0.2, lane: 2 },
        { time: 190.9, dur: 0.2, lane: 0 }, { time: 191.2, dur: 0.2, lane: 3 }, { time: 191.5, dur: 0.2, lane: 1 },
        { time: 191.8, dur: 0.2, lane: 2 }, { time: 192.2, dur: 1.4, lane: 0 },

        // Outro (3:28 - 3:40)
        { time: 208.5, dur: 0.2, lane: 0 }, { time: 209.5, dur: 0.2, lane: 1 }, { time: 210.5, dur: 1.5, lane: 2 },
        { time: 212.5, dur: 0.2, lane: 3 }, { time: 213.5, dur: 0.2, lane: 2 }, { time: 214.5, dur: 1.5, lane: 1 },
        { time: 216.5, dur: 0.2, lane: 0 }, { time: 217.5, dur: 0.2, lane: 2 }, { time: 218.5, dur: 2.5, lane: 3 }
    ]
};
