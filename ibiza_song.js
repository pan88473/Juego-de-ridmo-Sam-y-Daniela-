window.SONG_IBIZA = {
    title: "I Took A Pill In Ibiza (EXTREME 💀)",
    audioSrc: "ibiza.mp3",
    lyrics: [
        { start: 0.0, end: 8.5, text: "♪ (Intro - Dobles Toques de Guitarra) ♪", isChorus: false },
        { start: 8.6, end: 17.5, text: "I took a pill in Ibiza to show Avicii I was cool...", isChorus: false },
        { start: 17.6, end: 26.5, text: "And when I finally got sober, felt ten years older...", isChorus: false },
        { start: 26.6, end: 35.0, text: "But fuck it, it was something to do...", isChorus: false },
        { start: 35.1, end: 44.5, text: "♪ (Pre-Coro - Redobles en Semicorcheas) ♪", isChorus: false },
        { start: 44.6, end: 72.0, text: "♪ (DROP 1 - MULTI-TOUCH & RÁFAGAS) ♪", isChorus: true },
        { start: 72.1, end: 89.5, text: "I'm just a singer who already blew his shot...", isChorus: false },
        { start: 89.6, end: 105.0, text: "All I know are sad songs, sad songs...", isChorus: false },
        { start: 105.1, end: 122.0, text: "♪ (Pre-Coro 2 - Aceleración Máxima) ♪", isChorus: false },
        { start: 122.1, end: 152.0, text: "♪ (DROP 2 - DOBLE CARRILES CRUZADOS) ♪", isChorus: true },
        { start: 152.1, end: 170.0, text: "♪ (Puente - Hold + Trill Rápido) ♪", isChorus: false },
        { start: 170.1, end: 197.0, text: "♪ (CLÍMAX TOTAL FINAL - RESISTENCIA) ♪", isChorus: true }
    ],
    chart: [
        // ==========================================
        // 1. INTRO: DOBLES SIMULTÁNEOS (0:00 - 0:17)
        // ==========================================
        { time: 1.0, dur: 0.2, lane: 0 }, { time: 1.0, dur: 0.2, lane: 3 }, // DOBLE
        { time: 2.2, dur: 0.2, lane: 1 }, { time: 2.2, dur: 0.2, lane: 2 }, // DOBLE
        { time: 3.4, dur: 0.2, lane: 0 }, { time: 3.4, dur: 0.2, lane: 3 },
        { time: 4.6, dur: 1.4, lane: 1 }, // HOLD izquierda
        { time: 5.0, dur: 0.2, lane: 3 }, { time: 5.5, dur: 0.2, lane: 2 }, // Toques mientras sostiene
        { time: 6.8, dur: 0.2, lane: 0 }, { time: 6.8, dur: 0.2, lane: 2 },
        { time: 7.6, dur: 0.2, lane: 1 }, { time: 7.6, dur: 0.2, lane: 3 },
        { time: 8.4, dur: 1.5, lane: 0 }, // HOLD
        { time: 9.0, dur: 0.2, lane: 2 }, { time: 9.5, dur: 0.2, lane: 3 },
        { time: 10.8, dur: 0.2, lane: 0 }, { time: 10.8, dur: 0.2, lane: 3 },
        { time: 11.6, dur: 0.2, lane: 1 }, { time: 12.0, dur: 0.2, lane: 2 },
        { time: 12.4, dur: 0.2, lane: 3 }, { time: 12.8, dur: 0.2, lane: 2 },
        { time: 13.2, dur: 0.2, lane: 1 }, { time: 13.6, dur: 0.2, lane: 0 },
        { time: 14.4, dur: 1.6, lane: 3 }, // HOLD
        { time: 15.0, dur: 0.2, lane: 0 }, { time: 15.4, dur: 0.2, lane: 1 },

        // ==========================================
        // 2. VERSO 1 TÉCNICO (0:17 - 0:35)
        // ==========================================
        { time: 17.6, dur: 0.2, lane: 0 }, { time: 17.6, dur: 0.2, lane: 2 },
        { time: 18.2, dur: 0.2, lane: 1 }, { time: 18.5, dur: 0.2, lane: 3 },
        { time: 19.1, dur: 0.2, lane: 2 }, { time: 19.4, dur: 0.2, lane: 0 },
        { time: 20.0, dur: 1.2, lane: 1 },
        { time: 21.6, dur: 0.2, lane: 0 }, { time: 21.6, dur: 0.2, lane: 3 },
        { time: 22.2, dur: 0.2, lane: 1 }, { time: 22.5, dur: 0.2, lane: 2 },
        { time: 23.1, dur: 0.2, lane: 3 }, { time: 23.4, dur: 0.2, lane: 0 },
        { time: 24.0, dur: 1.3, lane: 2 },
        { time: 25.6, dur: 0.2, lane: 1 }, { time: 25.6, dur: 0.2, lane: 3 },
        { time: 26.2, dur: 0.2, lane: 2 }, { time: 26.5, dur: 0.2, lane: 0 },
        { time: 27.1, dur: 0.2, lane: 1 }, { time: 27.4, dur: 0.2, lane: 3 },
        { time: 28.0, dur: 1.4, lane: 0 },
        { time: 29.6, dur: 0.2, lane: 0 }, { time: 29.6, dur: 0.2, lane: 2 },
        { time: 30.2, dur: 0.2, lane: 1 }, { time: 30.5, dur: 0.2, lane: 3 },
        { time: 31.1, dur: 0.2, lane: 2 }, { time: 31.4, dur: 0.2, lane: 0 },
        { time: 32.0, dur: 0.2, lane: 1 }, { time: 32.3, dur: 0.2, lane: 2 },
        { time: 33.0, dur: 0.2, lane: 0 }, { time: 33.0, dur: 0.2, lane: 3 },
        { time: 34.0, dur: 1.6, lane: 2 },

        // ==========================================
        // 3. PRE-CORO (REDOBLE ACELERADO) (0:35 - 0:44)
        // ==========================================
        { time: 36.0, dur: 0.2, lane: 0 }, { time: 36.0, dur: 0.2, lane: 1 },
        { time: 36.5, dur: 0.2, lane: 2 }, { time: 36.5, dur: 0.2, lane: 3 },
        { time: 37.0, dur: 0.2, lane: 0 }, { time: 37.3, dur: 0.2, lane: 1 },
        { time: 37.6, dur: 0.2, lane: 2 }, { time: 37.9, dur: 0.2, lane: 3 },
        { time: 38.3, dur: 0.2, lane: 2 }, { time: 38.6, dur: 0.2, lane: 1 },
        { time: 38.9, dur: 0.2, lane: 0 }, { time: 39.2, dur: 0.2, lane: 3 },
        // Aceleración a 16th notes continua
        { time: 39.6, dur: 0.2, lane: 0 }, { time: 39.8, dur: 0.2, lane: 1 },
        { time: 40.0, dur: 0.2, lane: 2 }, { time: 40.2, dur: 0.2, lane: 3 },
        { time: 40.4, dur: 0.2, lane: 2 }, { time: 40.6, dur: 0.2, lane: 1 },
        { time: 40.8, dur: 0.2, lane: 0 }, { time: 41.0, dur: 0.2, lane: 1 },
        { time: 41.2, dur: 0.2, lane: 2 }, { time: 41.4, dur: 0.2, lane: 3 },
        { time: 41.7, dur: 0.2, lane: 0 }, { time: 41.7, dur: 0.2, lane: 3 }, // Doble
        { time: 42.1, dur: 0.2, lane: 1 }, { time: 42.1, dur: 0.2, lane: 2 }, // Doble
        { time: 42.6, dur: 0.2, lane: 0 }, { time: 42.6, dur: 0.2, lane: 3 },
        { time: 43.1, dur: 1.6, lane: 1 }, { time: 43.1, dur: 1.6, lane: 2 }, // ¡DOBLE HOLD!

        // ==========================================
        // 4. DROP 1 EXTREMO (0:44 - 1:12)
        // ==========================================
        { time: 45.0, dur: 0.2, lane: 0 }, { time: 45.0, dur: 0.2, lane: 3 }, // GOLPE INICIAL
        { time: 45.3, dur: 0.2, lane: 1 }, { time: 45.6, dur: 0.2, lane: 2 },
        { time: 45.9, dur: 0.2, lane: 0 }, { time: 46.2, dur: 0.2, lane: 3 },
        { time: 46.6, dur: 1.2, lane: 0 }, // HOLD izquierdo
        { time: 47.0, dur: 0.2, lane: 2 }, { time: 47.3, dur: 0.2, lane: 3 }, { time: 47.6, dur: 0.2, lane: 2 },
        { time: 48.0, dur: 0.2, lane: 1 }, { time: 48.0, dur: 0.2, lane: 3 }, // DOBLE
        { time: 48.4, dur: 0.2, lane: 0 }, { time: 48.7, dur: 0.2, lane: 2 },
        { time: 49.0, dur: 0.2, lane: 1 }, { time: 49.3, dur: 0.2, lane: 3 },
        { time: 49.7, dur: 1.3, lane: 3 }, // HOLD derecho
        { time: 50.1, dur: 0.2, lane: 0 }, { time: 50.4, dur: 0.2, lane: 1 }, { time: 50.7, dur: 0.2, lane: 0 },
        { time: 51.3, dur: 0.2, lane: 0 }, { time: 51.3, dur: 0.2, lane: 2 },
        { time: 51.8, dur: 0.2, lane: 1 }, { time: 51.8, dur: 0.2, lane: 3 },
        { time: 52.3, dur: 0.2, lane: 0 }, { time: 52.6, dur: 0.2, lane: 1 },
        { time: 52.9, dur: 0.2, lane: 2 }, { time: 53.2, dur: 0.2, lane: 3 },
        { time: 53.6, dur: 1.2, lane: 2 },
        { time: 54.0, dur: 0.2, lane: 0 }, { time: 54.4, dur: 0.2, lane: 1 },
        // Escalera invertida
        { time: 55.0, dur: 0.2, lane: 3 }, { time: 55.3, dur: 0.2, lane: 2 },
        { time: 55.6, dur: 0.2, lane: 1 }, { time: 55.9, dur: 0.2, lane: 0 },
        { time: 56.3, dur: 0.2, lane: 1 }, { time: 56.3, dur: 0.2, lane: 3 },
        { time: 56.8, dur: 0.2, lane: 0 }, { time: 56.8, dur: 0.2, lane: 2 },
        { time: 57.3, dur: 1.4, lane: 0 },
        { time: 57.7, dur: 0.2, lane: 2 }, { time: 58.1, dur: 0.2, lane: 3 }, { time: 58.4, dur: 0.2, lane: 1 },
        { time: 59.0, dur: 0.2, lane: 0 }, { time: 59.0, dur: 0.2, lane: 3 },
        { time: 59.4, dur: 0.2, lane: 1 }, { time: 59.7, dur: 0.2, lane: 2 },
        { time: 60.0, dur: 0.2, lane: 0 }, { time: 60.3, dur: 0.2, lane: 3 },
        { time: 60.7, dur: 1.3, lane: 1 },
        { time: 61.1, dur: 0.2, lane: 3 }, { time: 61.5, dur: 0.2, lane: 2 },
        { time: 62.0, dur: 0.2, lane: 0 }, { time: 62.0, dur: 0.2, lane: 2 },
        { time: 62.4, dur: 0.2, lane: 1 }, { time: 62.4, dur: 0.2, lane: 3 },
        { time: 62.8, dur: 0.2, lane: 0 }, { time: 63.1, dur: 0.2, lane: 1 },
        { time: 63.4, dur: 0.2, lane: 2 }, { time: 63.7, dur: 0.2, lane: 3 },
        { time: 64.1, dur: 1.2, lane: 0 },
        { time: 64.5, dur: 0.2, lane: 2 }, { time: 64.9, dur: 0.2, lane: 3 },
        { time: 65.5, dur: 0.2, lane: 1 }, { time: 65.5, dur: 0.2, lane: 2 },
        { time: 66.0, dur: 0.2, lane: 0 }, { time: 66.3, dur: 0.2, lane: 2 },
        { time: 66.6, dur: 0.2, lane: 1 }, { time: 66.9, dur: 0.2, lane: 3 },
        { time: 67.4, dur: 1.4, lane: 3 },
        { time: 67.8, dur: 0.2, lane: 0 }, { time: 68.2, dur: 0.2, lane: 1 },
        { time: 68.8, dur: 0.2, lane: 0 }, { time: 68.8, dur: 0.2, lane: 3 },
        { time: 69.3, dur: 0.2, lane: 1 }, { time: 69.3, dur: 0.2, lane: 2 },
        { time: 69.9, dur: 2.2, lane: 0 }, { time: 69.9, dur: 2.2, lane: 3 }, // DOBLE CIERRE

        // ==========================================
        // 5. VERSO 2 RÁPIDO & SINCOPAS (1:12 - 1:45)
        // ==========================================
        { time: 73.0, dur: 0.2, lane: 1 }, { time: 73.0, dur: 0.2, lane: 2 },
        { time: 73.6, dur: 0.2, lane: 0 }, { time: 74.0, dur: 0.2, lane: 3 },
        { time: 74.5, dur: 0.2, lane: 1 }, { time: 74.9, dur: 0.2, lane: 2 },
        { time: 75.4, dur: 1.2, lane: 3 },
        { time: 77.0, dur: 0.2, lane: 0 }, { time: 77.0, dur: 0.2, lane: 2 },
        { time: 77.6, dur: 0.2, lane: 1 }, { time: 78.0, dur: 0.2, lane: 3 },
        { time: 78.5, dur: 1.2, lane: 0 },
        { time: 80.2, dur: 0.2, lane: 1 }, { time: 80.2, dur: 0.2, lane: 3 },
        { time: 80.8, dur: 0.2, lane: 2 }, { time: 81.2, dur: 0.2, lane: 0 },
        { time: 81.7, dur: 1.4, lane: 1 },
        { time: 83.5, dur: 0.2, lane: 0 }, { time: 83.5, dur: 0.2, lane: 3 },
        { time: 84.1, dur: 0.2, lane: 2 }, { time: 84.5, dur: 0.2, lane: 1 },
        { time: 85.0, dur: 0.2, lane: 3 }, { time: 85.4, dur: 0.2, lane: 0 },
        { time: 86.0, dur: 1.3, lane: 2 },
        { time: 87.8, dur: 0.2, lane: 0 }, { time: 87.8, dur: 0.2, lane: 2 },
        { time: 88.4, dur: 0.2, lane: 1 }, { time: 88.8, dur: 0.2, lane: 3 },
        { time: 89.4, dur: 1.4, lane: 0 },
        { time: 91.2, dur: 0.2, lane: 1 }, { time: 91.2, dur: 0.2, lane: 2 },
        { time: 91.8, dur: 0.2, lane: 0 }, { time: 92.2, dur: 0.2, lane: 3 },
        { time: 92.8, dur: 1.2, lane: 2 },
        { time: 94.6, dur: 0.2, lane: 0 }, { time: 94.6, dur: 0.2, lane: 3 },
        { time: 95.2, dur: 0.2, lane: 1 }, { time: 95.6, dur: 0.2, lane: 2 },
        { time: 96.2, dur: 1.4, lane: 3 },
        { time: 98.0, dur: 0.2, lane: 0 }, { time: 98.0, dur: 0.2, lane: 2 },
        { time: 98.6, dur: 0.2, lane: 1 }, { time: 99.0, dur: 0.2, lane: 3 },
        { time: 99.5, dur: 0.2, lane: 2 }, { time: 99.9, dur: 0.2, lane: 1 },
        { time: 100.5, dur: 0.2, lane: 0 }, { time: 100.5, dur: 0.2, lane: 3 },
        { time: 101.4, dur: 1.6, lane: 1 },

        // ==========================================
        // 6. PRE-CORO 2 (ESCALERA VELOZ) (1:45 - 2:02)
        // ==========================================
        { time: 105.0, dur: 0.2, lane: 0 }, { time: 105.0, dur: 0.2, lane: 2 },
        { time: 105.5, dur: 0.2, lane: 1 }, { time: 105.5, dur: 0.2, lane: 3 },
        { time: 106.0, dur: 0.2, lane: 0 }, { time: 106.3, dur: 0.2, lane: 1 },
        { time: 106.6, dur: 0.2, lane: 2 }, { time: 106.9, dur: 0.2, lane: 3 },
        { time: 107.4, dur: 1.2, lane: 2 },
        { time: 108.8, dur: 0.2, lane: 3 }, { time: 109.1, dur: 0.2, lane: 2 },
        { time: 109.4, dur: 0.2, lane: 1 }, { time: 109.7, dur: 0.2, lane: 0 },
        { time: 110.2, dur: 1.2, lane: 1 },
        // Aceleración despiadada
        { time: 111.6, dur: 0.2, lane: 0 }, { time: 111.8, dur: 0.2, lane: 1 },
        { time: 112.0, dur: 0.2, lane: 2 }, { time: 112.2, dur: 0.2, lane: 3 },
        { time: 112.4, dur: 0.2, lane: 2 }, { time: 112.6, dur: 0.2, lane: 1 },
        { time: 112.8, dur: 0.2, lane: 0 }, { time: 113.0, dur: 0.2, lane: 1 },
        { time: 113.2, dur: 0.2, lane: 2 }, { time: 113.4, dur: 0.2, lane: 3 },
        { time: 113.7, dur: 0.2, lane: 0 }, { time: 113.7, dur: 0.2, lane: 3 },
        { time: 114.1, dur: 0.2, lane: 1 }, { time: 114.1, dur: 0.2, lane: 2 },
        { time: 114.5, dur: 0.2, lane: 0 }, { time: 114.5, dur: 0.2, lane: 3 },
        { time: 115.0, dur: 0.2, lane: 1 }, { time: 115.3, dur: 0.2, lane: 2 },
        { time: 115.6, dur: 0.2, lane: 3 }, { time: 116.0, dur: 0.2, lane: 2 },
        { time: 116.4, dur: 0.2, lane: 1 }, { time: 116.8, dur: 0.2, lane: 0 },
        { time: 117.4, dur: 2.2, lane: 0 }, { time: 117.4, dur: 2.2, lane: 3 }, // SUBIDA MÁXIMA

        // ==========================================
        // 7. DROP 2 DEMENCIAL (2:02 - 2:32)
        // ==========================================
        { time: 122.2, dur: 0.2, lane: 0 }, { time: 122.2, dur: 0.2, lane: 3 },
        { time: 122.5, dur: 0.2, lane: 1 }, { time: 122.8, dur: 0.2, lane: 2 },
        { time: 123.1, dur: 0.2, lane: 0 }, { time: 123.4, dur: 0.2, lane: 3 },
        { time: 123.8, dur: 1.2, lane: 3 }, // HOLD derecho
        { time: 124.2, dur: 0.2, lane: 0 }, { time: 124.5, dur: 0.2, lane: 1 }, { time: 124.8, dur: 0.2, lane: 0 },
        { time: 125.2, dur: 0.2, lane: 0 }, { time: 125.2, dur: 0.2, lane: 2 },
        { time: 125.6, dur: 0.2, lane: 1 }, { time: 125.6, dur: 0.2, lane: 3 },
        { time: 126.1, dur: 0.2, lane: 2 }, { time: 126.4, dur: 0.2, lane: 0 },
        { time: 126.8, dur: 1.3, lane: 0 }, // HOLD izquierdo
        { time: 127.2, dur: 0.2, lane: 3 }, { time: 127.5, dur: 0.2, lane: 2 }, { time: 127.8, dur: 0.2, lane: 3 },
        { time: 128.3, dur: 0.2, lane: 1 }, { time: 128.3, dur: 0.2, lane: 3 },
        { time: 128.7, dur: 0.2, lane: 0 }, { time: 128.7, dur: 0.2, lane: 2 },
        { time: 129.2, dur: 0.2, lane: 1 }, { time: 129.5, dur: 0.2, lane: 2 },
        { time: 129.8, dur: 0.2, lane: 3 }, { time: 130.1, dur: 0.2, lane: 0 },
        { time: 130.5, dur: 1.2, lane: 1 },
        { time: 130.9, dur: 0.2, lane: 3 }, { time: 131.3, dur: 0.2, lane: 2 },
        { time: 131.8, dur: 0.2, lane: 0 }, { time: 131.8, dur: 0.2, lane: 3 },
        { time: 132.2, dur: 0.2, lane: 1 }, { time: 132.5, dur: 0.2, lane: 2 },
        { time: 132.8, dur: 0.2, lane: 3 }, { time: 133.1, dur: 0.2, lane: 0 },
        { time: 133.5, dur: 1.4, lane: 2 },
        { time: 133.9, dur: 0.2, lane: 0 }, { time: 134.3, dur: 0.2, lane: 1 },
        // Zigzag rápido
        { time: 135.0, dur: 0.2, lane: 0 }, { time: 135.3, dur: 0.2, lane: 2 },
        { time: 135.6, dur: 0.2, lane: 1 }, { time: 135.9, dur: 0.2, lane: 3 },
        { time: 136.2, dur: 0.2, lane: 2 }, { time: 136.5, dur: 0.2, lane: 0 },
        { time: 136.8, dur: 0.2, lane: 1 }, { time: 137.1, dur: 0.2, lane: 3 },
        { time: 137.6, dur: 1.4, lane: 0 },
        { time: 138.0, dur: 0.2, lane: 2 }, { time: 138.4, dur: 0.2, lane: 3 },
        { time: 139.0, dur: 0.2, lane: 0 }, { time: 139.0, dur: 0.2, lane: 3 },
        { time: 139.4, dur: 0.2, lane: 1 }, { time: 139.4, dur: 0.2, lane: 2 },
        { time: 140.0, dur: 0.2, lane: 0 }, { time: 140.3, dur: 0.2, lane: 2 },
        { time: 140.6, dur: 0.2, lane: 1 }, { time: 140.9, dur: 0.2, lane: 3 },
        { time: 141.4, dur: 1.3, lane: 2 },
        { time: 141.8, dur: 0.2, lane: 0 }, { time: 142.2, dur: 0.2, lane: 1 },
        { time: 142.8, dur: 0.2, lane: 1 }, { time: 142.8, dur: 0.2, lane: 3 },
        { time: 143.2, dur: 0.2, lane: 0 }, { time: 143.2, dur: 0.2, lane: 2 },
        { time: 143.8, dur: 0.2, lane: 3 }, { time: 144.1, dur: 0.2, lane: 2 },
        { time: 144.4, dur: 0.2, lane: 1 }, { time: 144.7, dur: 0.2, lane: 0 },
        { time: 145.2, dur: 2.2, lane: 1 }, { time: 145.2, dur: 2.2, lane: 2 },

        // ==========================================
        // 8. PUENTE: HOLD + TRILL VELOZ (2:32 - 2:50)
        // ==========================================
        { time: 152.0, dur: 1.8, lane: 0 }, // HOLD prolongado
        { time: 152.5, dur: 0.2, lane: 2 }, { time: 152.9, dur: 0.2, lane: 3 },
        { time: 153.3, dur: 0.2, lane: 2 }, { time: 153.7, dur: 0.2, lane: 3 },
        { time: 154.5, dur: 1.8, lane: 3 }, // HOLD derecho
        { time: 155.0, dur: 0.2, lane: 1 }, { time: 155.4, dur: 0.2, lane: 0 },
        { time: 155.8, dur: 0.2, lane: 1 }, { time: 156.2, dur: 0.2, lane: 0 },
        { time: 157.0, dur: 0.2, lane: 0 }, { time: 157.0, dur: 0.2, lane: 2 },
        { time: 157.6, dur: 0.2, lane: 1 }, { time: 157.6, dur: 0.2, lane: 3 },
        { time: 158.2, dur: 0.2, lane: 0 }, { time: 158.5, dur: 0.2, lane: 1 },
        { time: 158.8, dur: 0.2, lane: 2 }, { time: 159.1, dur: 0.2, lane: 3 },
        { time: 159.8, dur: 1.5, lane: 1 },
        { time: 161.8, dur: 0.2, lane: 0 }, { time: 161.8, dur: 0.2, lane: 3 },
        { time: 162.4, dur: 0.2, lane: 1 }, { time: 162.4, dur: 0.2, lane: 2 },
        { time: 163.0, dur: 0.2, lane: 3 }, { time: 163.3, dur: 0.2, lane: 2 },
        { time: 163.6, dur: 0.2, lane: 1 }, { time: 163.9, dur: 0.2, lane: 0 },
        { time: 164.5, dur: 1.6, lane: 2 },
        { time: 166.5, dur: 0.2, lane: 0 }, { time: 166.5, dur: 0.2, lane: 1 },
        { time: 167.0, dur: 0.2, lane: 2 }, { time: 167.0, dur: 0.2, lane: 3 },
        { time: 167.6, dur: 0.2, lane: 0 }, { time: 167.9, dur: 0.2, lane: 2 },
        { time: 168.2, dur: 0.2, lane: 1 }, { time: 168.5, dur: 0.2, lane: 3 },
        { time: 169.0, dur: 1.8, lane: 0 }, { time: 169.0, dur: 1.8, lane: 3 }, // SUBIDA FINAL

        // ==========================================
        // 9. CLÍMAX FINAL TOTAL (2:50 - 3:17)
        // ==========================================
        { time: 171.0, dur: 0.2, lane: 0 }, { time: 171.0, dur: 0.2, lane: 3 },
        { time: 171.3, dur: 0.2, lane: 1 }, { time: 171.6, dur: 0.2, lane: 2 },
        { time: 171.9, dur: 0.2, lane: 0 }, { time: 172.2, dur: 0.2, lane: 3 },
        { time: 172.6, dur: 1.2, lane: 1 }, // HOLD
        { time: 173.0, dur: 0.2, lane: 3 }, { time: 173.3, dur: 0.2, lane: 2 }, { time: 173.6, dur: 0.2, lane: 0 },
        { time: 174.0, dur: 0.2, lane: 0 }, { time: 174.0, dur: 0.2, lane: 2 },
        { time: 174.4, dur: 0.2, lane: 1 }, { time: 174.4, dur: 0.2, lane: 3 },
        { time: 174.9, dur: 0.2, lane: 2 }, { time: 175.2, dur: 0.2, lane: 0 },
        { time: 175.6, dur: 1.2, lane: 2 }, // HOLD
        { time: 176.0, dur: 0.2, lane: 0 }, { time: 176.3, dur: 0.2, lane: 1 }, { time: 176.6, dur: 0.2, lane: 3 },
        { time: 177.1, dur: 0.2, lane: 0 }, { time: 177.1, dur: 0.2, lane: 3 },
        { time: 177.5, dur: 0.2, lane: 1 }, { time: 177.5, dur: 0.2, lane: 2 },
        { time: 178.0, dur: 0.2, lane: 0 }, { time: 178.3, dur: 0.2, lane: 1 },
        { time: 178.6, dur: 0.2, lane: 2 }, { time: 178.9, dur: 0.2, lane: 3 },
        { time: 179.3, dur: 0.2, lane: 2 }, { time: 179.6, dur: 0.2, lane: 1 },
        { time: 179.9, dur: 0.2, lane: 0 }, { time: 180.2, dur: 0.2, lane: 3 },
        { time: 180.7, dur: 1.4, lane: 3 },
        { time: 181.1, dur: 0.2, lane: 0 }, { time: 181.5, dur: 0.2, lane: 1 },
        // Ametralladora final de semicorcheas
        { time: 182.2, dur: 0.2, lane: 0 }, { time: 182.5, dur: 0.2, lane: 2 },
        { time: 182.8, dur: 0.2, lane: 1 }, { time: 183.1, dur: 0.2, lane: 3 },
        { time: 183.4, dur: 0.2, lane: 2 }, { time: 183.7, dur: 0.2, lane: 0 },
        { time: 184.0, dur: 0.2, lane: 1 }, { time: 184.3, dur: 0.2, lane: 3 },
        { time: 184.7, dur: 0.2, lane: 0 }, { time: 184.7, dur: 0.2, lane: 2 },
        { time: 185.1, dur: 0.2, lane: 1 }, { time: 185.1, dur: 0.2, lane: 3 },
        { time: 185.6, dur: 0.2, lane: 0 }, { time: 185.6, dur: 0.2, lane: 3 },
        { time: 186.2, dur: 1.4, lane: 1 },
        { time: 186.6, dur: 0.2, lane: 3 }, { time: 187.0, dur: 0.2, lane: 2 },
        { time: 187.6, dur: 0.2, lane: 0 }, { time: 187.6, dur: 0.2, lane: 3 },
        { time: 188.1, dur: 0.2, lane: 1 }, { time: 188.1, dur: 0.2, lane: 2 },
        { time: 188.7, dur: 0.2, lane: 0 }, { time: 189.0, dur: 0.2, lane: 1 },
        { time: 189.3, dur: 0.2, lane: 2 }, { time: 189.6, dur: 0.2, lane: 3 },
        { time: 190.1, dur: 1.5, lane: 2 },
        { time: 190.5, dur: 0.2, lane: 0 }, { time: 191.0, dur: 0.2, lane: 1 },
        { time: 191.8, dur: 0.2, lane: 0 }, { time: 191.8, dur: 0.2, lane: 3 },
        { time: 192.4, dur: 3.5, lane: 1 }, { time: 192.4, dur: 3.5, lane: 2 } // DOBLE HOLD FINAL A 3:17
    ]
};
