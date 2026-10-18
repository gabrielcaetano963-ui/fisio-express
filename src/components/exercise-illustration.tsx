import type { ExercisePose } from "@/data/exercises";

type IllustrationProps = {
  pose: ExercisePose;
  className?: string;
};

const poseLines: Record<ExercisePose, string[]> = {
  "wall-slide": ["M61 50 L45 28", "M61 50 L76 27", "M45 28 L38 15", "M76 27 L82 14"],
  "external-rotation": ["M61 52 L45 53", "M45 53 L32 42", "M61 52 L77 51", "M77 51 L91 42"],
  pendulum: ["M60 49 L42 66", "M42 66 L39 91", "M60 49 L76 67", "M76 67 L91 70"],
  scapular: ["M60 51 L39 46", "M39 46 L25 52", "M60 51 L81 46", "M81 46 L95 52"],
  neck: ["M54 34 Q61 28 68 34", "M57 51 L42 70", "M64 51 L79 70"],
  bridge: ["M30 76 L50 60", "M50 60 L78 63", "M78 63 L96 79", "M26 80 L96 80"],
  knee: ["M58 54 L58 78", "M58 78 L88 77", "M58 54 L42 77", "M42 77 L39 94"],
  ankle: ["M59 53 L48 79", "M48 79 L40 94", "M64 53 L75 79", "M75 79 L83 94"],
  stretch: ["M46 62 L73 75", "M73 75 L101 76", "M48 62 L36 83", "M36 83 L20 84"],
};

const bodyPath: Record<ExercisePose, string> = {
  "wall-slide": "M60 45 Q52 61 54 79 L46 103 M60 79 L72 103",
  "external-rotation": "M60 45 L60 82 L49 105 M60 82 L72 105",
  pendulum: "M57 45 Q64 57 74 66 L70 88 M74 66 L88 88",
  scapular: "M60 45 L60 82 L48 105 M60 82 L73 105",
  neck: "M61 45 L61 81 L49 104 M61 81 L74 104",
  bridge: "M31 76 Q42 55 54 54 L79 64",
  knee: "M60 45 L58 57",
  ankle: "M61 45 L61 81",
  stretch: "M43 46 Q45 56 50 63",
};

export function ExerciseIllustration({ pose, className = "" }: IllustrationProps) {
  const seated = pose === "knee";
  const horizontal = pose === "bridge" || pose === "stretch";
  const headX = pose === "bridge" ? 22 : pose === "stretch" ? 39 : 60;
  const headY = pose === "bridge" ? 74 : pose === "stretch" ? 39 : 33;

  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Ilustração demonstrativa do movimento"
      className={className}
    >
      <rect width="120" height="120" rx="18" fill="#eef8f4" />
      <path d="M17 105 H103" stroke="#b9d7ce" strokeWidth="2" strokeLinecap="round" />
      {pose === "wall-slide" && (
        <path d="M101 13 V106" stroke="#b9d7ce" strokeWidth="3" strokeLinecap="round" />
      )}
      {seated && (
        <path d="M42 64 H68 V87 M42 64 V87" stroke="#2e756c" strokeWidth="3" fill="none" />
      )}
      <circle cx={headX} cy={headY} r="8" fill="#ffcfad" stroke="#123852" strokeWidth="3" />
      <path
        d={bodyPath[pose]}
        stroke="#123852"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {poseLines[pose].map((line) => (
        <path
          key={line}
          d={line}
          stroke="#123852"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {!horizontal && !seated && (
        <path d="M52 54 Q60 59 68 54" stroke="#39a88e" strokeWidth="5" fill="none" />
      )}
      {pose === "external-rotation" && (
        <path d="M31 42 Q60 28 91 42" stroke="#39a88e" strokeWidth="2.5" fill="none" />
      )}
      {pose === "pendulum" && (
        <path d="M30 88 Q39 97 49 88" stroke="#39a88e" strokeWidth="2.5" fill="none" />
      )}
      <circle cx="101" cy="19" r="7" fill="#fff" />
      <path d="M98 19 H104 M101 16 V22" stroke="#39a88e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
