// IELTS Intensive Study Schedule Data (July 2 - August 10, 2026)
const scheduleData = [
    // --- WEEK 1 ---
    {
        id: "2026-07-02",
        dateLabel: "July 2",
        dayLabel: "Thursday",
        focus: "Writing Task 2 (Essays)",
        week: 1,
        sessions: [
            "Outline 3 different essay types (Opinion, Discussion, Problem/Solution). Limit to 5 mins each.",
            "Write one complete Task 2 essay in strictly 40 minutes."
        ]
    },
    {
        id: "2026-07-03",
        dateLabel: "July 3",
        dayLabel: "Friday",
        focus: "Weakness Targeting & Vocab",
        week: 1,
        sessions: [
            "Review your writing from yesterday. Identify grammatical errors.",
            "Build topic-specific vocabulary (e.g., Technology and Environment collocations)."
        ]
    },
    {
        id: "2026-07-04",
        dateLabel: "July 4",
        dayLabel: "Saturday",
        focus: "The Endurance Test",
        week: 1,
        isMockTest: true,
        sessions: [
            "Complete a full 3-hour mock test using a digital simulator (Listening, Reading, Writing)."
        ]
    },
    {
        id: "2026-07-05",
        dateLabel: "July 5",
        dayLabel: "Sunday",
        focus: "Review & Reset",
        week: 1,
        sessions: [
            "Calculate band scores from Saturday. Analyze mistakes deeply.",
            "Passive English immersion (watch a movie, listen to a podcast)."
        ]
    },

    // --- WEEK 2 ---
    {
        id: "2026-07-06",
        dateLabel: "July 6",
        dayLabel: "Monday",
        focus: "Receptive Skills (Reading & Listening)",
        week: 2,
        sessions: [
            "Full Listening section. Score and analyze missed distractors.",
            "Two Reading passages. Strictly 20 minutes per passage. Focus on True/False/Not Given."
        ]
    },
    {
        id: "2026-07-07",
        dateLabel: "July 7",
        dayLabel: "Tuesday",
        focus: "Writing Task 1 (Data & Trends)",
        week: 2,
        sessions: [
            "Deconstruct a graph/chart prompt & write a clear overview paragraph.",
            "Write a complete Task 1 response in 20 minutes."
        ]
    },
    {
        id: "2026-07-08",
        dateLabel: "July 8",
        dayLabel: "Wednesday",
        focus: "Speaking & Grammar Mechanics",
        week: 2,
        sessions: [
            "Record yourself answering Part 1 & Part 2 speaking questions. Listen for filler words.",
            "Grammar drills—focus on the Present Perfect and past habits ('used to')."
        ]
    },
    {
        id: "2026-07-09",
        dateLabel: "July 9",
        dayLabel: "Thursday",
        focus: "Writing Task 2 (Essays)",
        week: 2,
        sessions: [
            "Outline 3 different essay types (5 mins each).",
            "Write one complete essay (40 mins)."
        ]
    },
    {
        id: "2026-07-10",
        dateLabel: "July 10",
        dayLabel: "Friday",
        focus: "Weakness Targeting & Vocab",
        week: 2,
        sessions: [
            "Review mistakes from Monday-Thursday. Re-do failed listening tracks.",
            "Build vocabulary related to Education and Health."
        ]
    },
    {
        id: "2026-07-11",
        dateLabel: "July 11",
        dayLabel: "Saturday",
        focus: "The Endurance Test",
        week: 2,
        isMockTest: true,
        sessions: [
            "Complete a full 3-hour mock test. No interruptions."
        ]
    },
    {
        id: "2026-07-12",
        dateLabel: "July 12",
        dayLabel: "Sunday",
        focus: "Review & Reset",
        week: 2,
        sessions: [
            "Calculate band scores and review test mistakes.",
            "Passive English immersion. Relax."
        ]
    },

    // --- WEEK 3 ---
    {
        id: "2026-07-13",
        dateLabel: "July 13",
        dayLabel: "Monday",
        focus: "Receptive Skills (Reading & Listening)",
        week: 3,
        sessions: [
            "Full Listening section. Analyze mistakes.",
            "Two Reading passages (strictly 20 mins each)."
        ]
    },
    {
        id: "2026-07-14",
        dateLabel: "July 14",
        dayLabel: "Tuesday",
        focus: "Writing Task 1 (Data & Trends)",
        week: 3,
        sessions: [
            "Deconstruct prompt & write overview.",
            "Write complete Task 1 response (20 mins). Vary trend verbs."
        ]
    },
    {
        id: "2026-07-15",
        dateLabel: "July 15",
        dayLabel: "Wednesday",
        focus: "Speaking & Grammar Mechanics",
        week: 3,
        sessions: [
            "Record Part 1 & 2 answers. Focus on fluency and extending Part 3 answers.",
            "Grammar drills (Complex sentences and conditional clauses)."
        ]
    },
    {
        id: "2026-07-16",
        dateLabel: "July 16",
        dayLabel: "Thursday",
        focus: "Writing Task 2 (Essays)",
        week: 3,
        sessions: [
            "Outline 3 different essay types (5 mins each).",
            "Write one complete essay (40 mins)."
        ]
    },
    {
        id: "2026-07-17",
        dateLabel: "July 17",
        dayLabel: "Friday",
        focus: "Weakness Targeting & Vocab",
        week: 3,
        sessions: [
            "Review mistakes from Mon-Thu.",
            "Build vocabulary related to Work, Business, and Globalization."
        ]
    },
    {
        id: "2026-07-18",
        dateLabel: "July 18",
        dayLabel: "Saturday",
        focus: "The Endurance Test",
        week: 3,
        isMockTest: true,
        sessions: [
            "Complete a full 3-hour mock test."
        ]
    },
    {
        id: "2026-07-19",
        dateLabel: "July 19",
        dayLabel: "Sunday",
        focus: "Review & Reset",
        week: 3,
        sessions: [
            "Calculate band scores and review test mistakes.",
            "Passive English immersion."
        ]
    },

    // --- WEEK 4 ---
    {
        id: "2026-07-20",
        dateLabel: "July 20",
        dayLabel: "Monday",
        focus: "Receptive Skills (Reading & Listening)",
        week: 4,
        sessions: [
            "Full Listening section. Analyze mistakes.",
            "Two Reading passages (strictly 20 mins each)."
        ]
    },
    {
        id: "2026-07-21",
        dateLabel: "July 21",
        dayLabel: "Tuesday",
        focus: "Writing Task 1 (Data & Trends)",
        week: 4,
        sessions: [
            "Deconstruct prompt & write overview. (Try a process diagram today).",
            "Write complete Task 1 response (20 mins)."
        ]
    },
    {
        id: "2026-07-22",
        dateLabel: "July 22",
        dayLabel: "Wednesday",
        focus: "Speaking & Grammar Mechanics",
        week: 4,
        sessions: [
            "Record Part 1 & 2 answers.",
            "Grammar drills."
        ]
    },
    {
        id: "2026-07-23",
        dateLabel: "July 23",
        dayLabel: "Thursday",
        focus: "Writing Task 2 (Essays)",
        week: 4,
        sessions: [
            "Outline 3 different essay types (5 mins each).",
            "Write one complete essay (40 mins)."
        ]
    },
    {
        id: "2026-07-24",
        dateLabel: "July 24",
        dayLabel: "Friday",
        focus: "Weakness Targeting & Vocab",
        week: 4,
        sessions: [
            "Target specific question types you consistently get wrong (e.g., Heading Matching).",
            "General idiom and phrasal verb review for Speaking."
        ]
    },
    {
        id: "2026-07-25",
        dateLabel: "July 25",
        dayLabel: "Saturday",
        focus: "The Endurance Test",
        week: 4,
        isMockTest: true,
        sessions: [
            "Complete a full 3-hour mock test."
        ]
    },
    {
        id: "2026-07-26",
        dateLabel: "July 26",
        dayLabel: "Sunday",
        focus: "Review & Reset",
        week: 4,
        sessions: [
            "Calculate band scores and review test mistakes.",
            "Passive English immersion."
        ]
    },

    // --- WEEK 5 ---
    {
        id: "2026-07-27",
        dateLabel: "July 27",
        dayLabel: "Monday",
        focus: "Receptive Skills (Reading & Listening)",
        week: 5,
        sessions: [
            "Full Listening section. Analyze mistakes.",
            "Two Reading passages (strictly 20 mins each)."
        ]
    },
    {
        id: "2026-07-28",
        dateLabel: "July 28",
        dayLabel: "Tuesday",
        focus: "Writing Task 1 (Data & Trends)",
        week: 5,
        sessions: [
            "Deconstruct prompt & write overview.",
            "Write complete Task 1 response (20 mins)."
        ]
    },
    {
        id: "2026-07-29",
        dateLabel: "July 29",
        dayLabel: "Wednesday",
        focus: "Speaking & Grammar Mechanics",
        week: 5,
        sessions: [
            "Record Part 1 & 2 answers. Do a full simulated Speaking test with a partner if possible.",
            "Final grammar review."
        ]
    },
    {
        id: "2026-07-30",
        dateLabel: "July 30",
        dayLabel: "Thursday",
        focus: "Writing Task 2 (Essays)",
        week: 5,
        sessions: [
            "Outline 3 different essay types (5 mins each).",
            "Write one complete essay (40 mins)."
        ]
    },
    {
        id: "2026-07-31",
        dateLabel: "July 31",
        dayLabel: "Friday",
        focus: "Weakness Targeting & Vocab",
        week: 5,
        sessions: [
            "Review mistakes from Mon-Thu.",
            "Light vocabulary review."
        ]
    },
    {
        id: "2026-08-01",
        dateLabel: "August 1",
        dayLabel: "Saturday",
        focus: "The Endurance Test",
        week: 5,
        isMockTest: true,
        sessions: [
            "Complete a full 3-hour mock test using a digital simulator."
        ]
    },
    {
        id: "2026-08-02",
        dateLabel: "August 2",
        dayLabel: "Sunday",
        focus: "Review & Reset",
        week: 5,
        sessions: [
            "Calculate band scores and review test mistakes.",
            "Passive English immersion."
        ]
    },

    // --- WEEK 6 ---
    {
        id: "2026-08-03",
        dateLabel: "August 3",
        dayLabel: "Monday",
        focus: "Receptive Skills (Reading & Listening)",
        week: 6,
        sessions: [
            "Full Listening section. Analyze mistakes.",
            "Two Reading passages (strictly 20 mins each)."
        ]
    },
    {
        id: "2026-08-04",
        dateLabel: "August 4",
        dayLabel: "Tuesday",
        focus: "Writing Task 1 (Data & Trends)",
        week: 6,
        sessions: [
            "Deconstruct prompt & write overview.",
            "Write complete Task 1 response (20 mins)."
        ]
    },
    {
        id: "2026-08-05",
        dateLabel: "August 5",
        dayLabel: "Wednesday",
        focus: "EXTRA ENDURANCE TEST",
        week: 6,
        isMockTest: true,
        sessions: [
            "Complete a full 3-hour mock test using a digital simulator. Treat it like the real thing."
        ]
    },
    {
        id: "2026-08-06",
        dateLabel: "August 6",
        dayLabel: "Thursday",
        focus: "Writing Task 2 (Essays)",
        week: 6,
        sessions: [
            "Write one complete essay (40 mins) focusing entirely on coherence and cohesion."
        ]
    },
    {
        id: "2026-08-07",
        dateLabel: "August 7",
        dayLabel: "Friday",
        focus: "Light Review & Confidence",
        week: 6,
        sessions: [
            "Review Wednesday's mock test. Do NOT do heavy new studying.",
            "Light speaking practice. Focus on sounding confident and clear."
        ]
    },
    {
        id: "2026-08-08",
        dateLabel: "August 8",
        dayLabel: "Saturday",
        focus: "Final Endurance Test",
        week: 6,
        isMockTest: true,
        sessions: [
            "Your last full 3-hour mock test."
        ]
    },
    {
        id: "2026-08-09",
        dateLabel: "August 9",
        dayLabel: "Sunday",
        focus: "Rest & Prepare",
        week: 6,
        sessions: [
            "Lightly review your best essays and vocabulary notes.",
            "Prepare your ID, pencils/pens, and route to the test center. Get to bed early."
        ]
    },

    // --- WEEK 7 ---
    {
        id: "2026-08-10",
        dateLabel: "August 10",
        dayLabel: "Monday",
        focus: "OFFICIAL EXAM DAY",
        week: 7,
        sessions: [
            "Eat a good breakfast.",
            "Arrive at the testing center early.",
            "Stay calm, trust your preparation, and do your best!"
        ]
    }
];

// Target Exam Date: August 10, 2026
const EXAM_DATE = new Date("2026-08-10T00:00:00");

// State variables
let checkedSessions = new Set();
let todayData = null;
let currentSelectedWeek = 1;

// Study Timer state variables
let timerInterval = null;
let timerSecondsLeft = 2400; // 40 minutes default
let timerRunning = false;

// Web Audio API synthesiser for timer alarm
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// System initialization
document.addEventListener("DOMContentLoaded", () => {
    loadProgress();
    calculateCountdown();
    determineToday();
    
    // Default to displaying Week 1 schedule
    if (todayData) {
        currentSelectedWeek = todayData.week;
    }
    switchWeek(currentSelectedWeek);
    renderTodayTasks();
    updateStatsDashboard();
    
    // Auto-update countdown every minute
    setInterval(calculateCountdown, 60000);
});

// Load checked sessions from LocalStorage
function loadProgress() {
    try {
        const stored = localStorage.getItem("ielts_schedule_checked_sessions");
        if (stored) {
            const parsed = JSON.parse(stored);
            checkedSessions = new Set(parsed);
        }
    } catch (e) {
        console.error("Failed to load user progress.", e);
    }
}

// Save progress to LocalStorage
function saveProgress() {
    try {
        localStorage.setItem("ielts_schedule_checked_sessions", JSON.stringify(Array.from(checkedSessions)));
    } catch (e) {
        console.error("Failed to save progress", e);
    }
}

// Calculate countdown timer
function calculateCountdown() {
    const now = new Date();
    // Midnight of exam day
    const examTime = EXAM_DATE.getTime();
    const diff = examTime - now.getTime();
    
    const element = document.getElementById("countdownDays");
    if (!element) return;
    
    if (diff <= 0) {
        element.textContent = "0";
        element.nextElementSibling.textContent = "Exam Day!";
    } else {
        const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
        element.textContent = daysLeft;
    }
}

// Determine which day is today relative to the 2026 timeline
function determineToday() {
    const today = new Date();
    const localDateStr = formatDateKey(today); // e.g. "2026-07-02"
    
    // Find matching date in database
    todayData = scheduleData.find(day => day.id === localDateStr);
    
    // Fallback: If current system date is outside schedule window (e.g. running in past/future),
    // default active page date to Day 1: July 2, 2026
    if (!todayData) {
        todayData = scheduleData[0];
    }
    
    // Update active UI title labels
    document.getElementById("today-day-name").textContent = todayData.dayLabel;
    document.getElementById("today-formatted-date").textContent = `${todayData.dateLabel}, 2026`;
    document.getElementById("today-skill-focus").textContent = todayData.focus;
}

// Helper: Format Date object to YYYY-MM-DD
function formatDateKey(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

// Render "Today's Tasks" items
function renderTodayTasks() {
    const container = document.getElementById("today-sessions");
    if (!container || !todayData) return;
    
    container.innerHTML = "";
    
    todayData.sessions.forEach((session, index) => {
        const key = `${todayData.id}-${index}`;
        const isCompleted = checkedSessions.has(key);
        
        const item = document.createElement("div");
        item.className = `session-item ${isCompleted ? 'completed' : ''}`;
        item.setAttribute("onclick", `toggleSessionStatus('${key}', ${index}, this)`);
        
        item.innerHTML = `
            <div class="session-checkbox-wrapper">
                <div class="session-checkbox">
                    <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="white" stroke-width="3.5" fill="none"></path></svg>
                </div>
            </div>
            <div class="session-content">
                <div class="session-label">Task ${index + 1}</div>
                <div class="session-desc">${session}</div>
            </div>
        `;
        
        container.appendChild(item);
    });
}

// Toggle session checklist item state
function toggleSessionStatus(sessionKey, sessionIndex, element) {
    if (checkedSessions.has(sessionKey)) {
        checkedSessions.delete(sessionKey);
        element.classList.remove("completed");
    } else {
        checkedSessions.add(sessionKey);
        element.classList.add("completed");
        
        // Visual reward checkmark punch
        element.style.transform = "scale(0.98)";
        setTimeout(() => {
            element.style.transform = "";
        }, 150);
    }
    
    saveProgress();
    updateStatsDashboard();
    
    // Rerender the active week selector grid to keep check status inline
    renderCalendarGrid();
}

// Calculate progress values and update stats
function updateStatsDashboard() {
    // Total sessions across entire schedule
    let totalSessions = 0;
    let completedCount = 0;
    let mockTestsTotal = 0;
    let mockTestsCompleted = 0;
    
    // Collect stats from database
    scheduleData.forEach(day => {
        const sessCount = day.sessions.length;
        totalSessions += sessCount;
        
        day.sessions.forEach((_, idx) => {
            const key = `${day.id}-${idx}`;
            if (checkedSessions.has(key)) {
                completedCount++;
            }
        });
        
        if (day.isMockTest) {
            mockTestsTotal++;
            // Mock test counts as completed if any or all session items of that day are checked
            const keyMock = `${day.id}-0`;
            if (checkedSessions.has(keyMock)) {
                mockTestsCompleted++;
            }
        }
    });
    
    // Percentage rate
    const completionRate = totalSessions > 0 ? Math.round((completedCount / totalSessions) * 100) : 0;
    
    // Streak calculations: consecutive days containing at least one checked session
    let currentStreak = 0;
    let maxStreak = 0;
    
    // We walk backwards or forwards to check streaks. Let's do simple sequential checked day count.
    let activeDays = 0;
    
    scheduleData.forEach(day => {
        let dayHasCompleted = false;
        day.sessions.forEach((_, idx) => {
            if (checkedSessions.has(`${day.id}-${idx}`)) {
                dayHasCompleted = true;
            }
        });
        
        if (dayHasCompleted) {
            activeDays++;
            currentStreak++;
            if (currentStreak > maxStreak) {
                maxStreak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }
    });
    
    // Update stats elements in DOM
    document.getElementById("completionRate").textContent = `${completionRate}%`;
    document.getElementById("completionProgressFill").style.width = `${completionRate}%`;
    document.getElementById("statStreak").textContent = maxStreak; // Maximum streak achieved
    document.getElementById("statMocks").textContent = `${mockTestsCompleted} / ${mockTestsTotal}`;
    document.getElementById("statDaysTotal").textContent = `${activeDays} / ${scheduleData.length}`;
    document.getElementById("statCompletedSessions").textContent = completedCount;
}

// Switch between calendar weeks (1 to 7)
function switchWeek(weekNum) {
    currentSelectedWeek = weekNum;
    
    // Highlight correct week selector tab
    const tabs = document.querySelectorAll("#weekTabs .week-tab");
    tabs.forEach((tab, index) => {
        if (index + 1 === weekNum) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
    
    renderCalendarGrid();
}

// Render the 7-day grid corresponding to the active week selector
function renderCalendarGrid() {
    const container = document.getElementById("calendarDays");
    if (!container) return;
    
    container.innerHTML = "";
    
    // Filter days for active week
    const weekDays = scheduleData.filter(day => day.week === currentSelectedWeek);
    
    // Build calendar cards
    weekDays.forEach(day => {
        const isToday = todayData && todayData.id === day.id;
        
        const card = document.createElement("div");
        card.className = `calendar-card ${isToday ? 'today' : ''}`;
        
        // Build sessions content
        let sessionsHTML = "";
        day.sessions.forEach((session, index) => {
            const key = `${day.id}-${index}`;
            const isCompleted = checkedSessions.has(key);
            
            sessionsHTML += `
                <div class="card-session-item">
                    <span class="card-session-item-number">${index + 1}</span>
                    <span style="${isCompleted ? 'text-decoration: line-through; opacity: 0.5;' : ''}">${session}</span>
                </div>
            `;
        });
        
        card.innerHTML = `
            <div>
                <div class="card-header-date">${day.dateLabel} • ${day.dayLabel}</div>
                <h3 class="card-header-title">${day.focus}</h3>
            </div>
            <div class="card-session-divider"></div>
            <div class="card-sessions">
                ${sessionsHTML}
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Study Session Timer Logic
function toggleTimer() {
    initAudio(); // Activate audio context on human action
    
    if (timerRunning) {
        // Pause timer
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById("timerStartBtn").classList.remove("btn-primary");
        document.getElementById("timerStartBtn").innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
            <span>Resume</span>
        `;
        document.getElementById("timerDisplay").classList.remove("running");
        document.title = "IELTS Prep Schedule & Study Companion";
    } else {
        // Start timer
        timerRunning = true;
        document.getElementById("timerStartBtn").classList.add("btn-primary");
        document.getElementById("timerStartBtn").innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect width="4" height="16" x="6" y="4" rx="1"/><rect width="4" height="16" x="14" y="4" rx="1"/></svg>
            <span>Pause</span>
        `;
        document.getElementById("timerDisplay").classList.add("running");
        
        timerInterval = setInterval(() => {
            timerSecondsLeft--;
            updateTimerDisplay();
            
            if (timerSecondsLeft <= 0) {
                clearInterval(timerInterval);
                timerRunning = false;
                playAlarmSound();
                alert("Time is up! Take a break.");
                resetTimer();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    
    // Reset to preset default
    const activePreset = document.querySelector(".btn-preset.active");
    if (activePreset) {
        timerSecondsLeft = parseInt(activePreset.getAttribute("data-time"));
    } else {
        timerSecondsLeft = 2400; // 40 mins fallback
    }
    
    updateTimerDisplay();
    document.getElementById("timerStartBtn").classList.remove("btn-primary");
    document.getElementById("timerStartBtn").innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        <span>Start</span>
    `;
    document.getElementById("timerDisplay").classList.remove("running");
    document.title = "IELTS Prep Schedule & Study Companion";
}

function setTimerPreset(seconds, buttonElement, taskName) {
    // Reset preset classes
    const presets = document.querySelectorAll(".btn-preset");
    presets.forEach(p => p.classList.remove("active"));
    buttonElement.classList.add("active");
    
    // Update timer configuration
    timerSecondsLeft = seconds;
    document.getElementById("timerTaskName").textContent = taskName;
    
    // Stop running interval
    if (timerRunning) {
        toggleTimer(); // pause
    }
    
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSecondsLeft / 60);
    const secs = timerSecondsLeft % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    
    document.getElementById("timerDisplay").textContent = formatted;
    
    // Update browser tab title with active status
    if (timerRunning) {
        document.title = `(${formatted}) IELTS Focus`;
    } else {
        document.title = "IELTS Prep Schedule & Study Companion";
    }
}

// Generate synthesizer sound when session complete
function playAlarmSound() {
    try {
        if (!audioCtx) initAudio();
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5 note
        osc.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.15); // A5 note
        
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
        console.error("Audio error", e);
    }
}
