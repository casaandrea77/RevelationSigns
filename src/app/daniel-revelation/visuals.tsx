import Image from "next/image";

export const prophecyScenes = [
  "babylon",
  "persia",
  "greece",
  "rome",
  "divided-rome",
  "papal-era",
  "reformation",
  "final-events",
  "second-coming",
  "millennium",
  "new-earth",
];
export const messiahScenes = [
  "gabriel",
  "bethlehem",
  "ministry",
  "cross",
  "resurrection",
  "heavenly-ministry",
  "second-coming",
  "second-coming",
  "new-earth",
];
export const angelScenes = [
  "daniel-vision",
  "gabriel",
  "daniel-strengthened",
  "john-angel",
];
export const historyScenes = [
  "babylon",
  "persia",
  "greece",
  "rome",
  "divided-rome",
  "papal-era",
  "final-events",
  "new-earth",
];
const descriptions: Record<string, string> = {
  babylon:
    "Babylon’s blue Ishtar Gate and processional road — historical reconstruction",
  persia:
    "Persian palace terrace and columns at Persepolis — historical reconstruction",
  greece:
    "Macedonian soldiers with long spears before a Greek city — historical reconstruction",
  rome: "Roman Forum and legionaries — historical reconstruction",
  "divided-rome":
    "Post-Roman settlements and separate rulers in western Europe — historical reconstruction",
  "papal-era":
    "Medieval clergy and a royal envoy near Old Saint Peter’s in Rome — historical reconstruction",
  reformation:
    "A Reformation-era printer preparing Bible pages at a wooden press — historical reconstruction",
  "final-events":
    "A family holding a Bible beneath a gathering storm — conceptual illustration",
  "second-coming":
    "Jesus returning in glory with angels — biblical illustration",
  millennium:
    "The redeemed with Christ in a heavenly court — illustration of this study’s reading of Revelation 20",
  "new-earth":
    "River, trees and restored creation with New Jerusalem — biblical illustration",
  bethlehem:
    "Mary, Joseph and the infant Jesus at Bethlehem — biblical illustration",
  ministry: "Jesus teaching by the Sea of Galilee — biblical illustration",
  cross: "Three crosses on a Judean hill at dusk — biblical illustration",
  resurrection:
    "The empty tomb and rolled-away stone at dawn — biblical illustration",
  "heavenly-ministry":
    "Jesus ministering in the heavenly sanctuary — biblical illustration",
  "daniel-vision":
    "Daniel receiving a vision beside the river — biblical illustration",
  gabriel: "Gabriel explaining prophecy to Daniel — biblical illustration",
  "daniel-strengthened":
    "A heavenly messenger strengthening Daniel — biblical illustration",
  "john-angel":
    "John receiving revelation through an angel on Patmos — biblical illustration",
};

export function Scene({
  id,
  compact = false,
}: {
  id: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-[#172c3e] ${compact ? "aspect-[4/5]" : "aspect-[3/2]"}`}
    >
      <Image
        src={`/media/images/daniel-revelation/${id}.webp`}
        alt={descriptions[id]}
        fill
        sizes={
          compact
            ? "(min-width: 1280px) 160px, (min-width: 768px) 33vw, 90vw"
            : "(min-width: 1024px) 340px, (min-width: 640px) 50vw, 90vw"
        }
        className="object-cover"
      />
    </div>
  );
}

export const explanations = [
  "Daniel tells Nebuchadnezzar, king of Babylon, ‘You are this head of gold.’ The gold head points to his kingdom; later kingdoms follow it.",
  "Silver follows gold in the statue. This study connects it with Medo-Persia. Daniel 8:20 directly names the ram’s two horns as the kings of Media and Persia.",
  "Bronze follows silver. This study connects it with Greece. Daniel 8:21 directly identifies the goat with Greece; its great horn represents its first king.",
  "Iron is strong and crushing. In this historicist reading, the iron and fourth beast represent Rome, the empire that followed the Greek kingdoms.",
  "Iron and clay do not hold together well. This study sees the divided kingdoms after western Rome in the mixed feet and the ten horns.",
  "The little horn is a symbol of a different kind of power. This historicist study connects its religious and political claims with the medieval papal system; this is an interpretation, not an uncontested historical fact or a judgment on individual Catholics.",
  "Daniel describes a time of trouble, followed by deliverance. The storm is a teaching illustration, not a prediction of a particular modern event or date.",
  "The stone becomes a mountain that fills the earth. Human kingdoms pass away, but God’s kingdom lasts forever. Revelation 21–22 pictures life in the restored creation.",
];

export function SymbolImage({ index }: { index: number }) {
  const positions = ["8%", "24%", "44%", "76%", "100%"];
  const names = [
    "Gold head",
    "Silver chest and arms",
    "Bronze belly and thighs",
    "Iron legs",
    "Feet of iron and clay",
  ];
  if (index < 5)
    return (
      <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-[#071522]">
        <Image
          src="/media/images/daniel-2-statue-metals.png"
          alt={`${names[index]} of the statue in Daniel 2 — prophetic symbol illustration`}
          fill
          sizes="(min-width: 1024px) 240px, 45vw"
          className="object-cover"
          style={{ objectPosition: `50% ${positions[index]}` }}
        />
      </div>
    );
  return (
    <svg
      viewBox="0 0 300 200"
      role="img"
      aria-label={
        index === 5
          ? "Diagram of the little horn among other horns"
          : index === 6
            ? "Storm and light: a visual metaphor for the time of trouble and deliverance"
            : "The stone grows into a mountain: a diagram of God’s everlasting kingdom"
      }
      className="aspect-[3/2] w-full rounded-md bg-[#071522]"
    >
      {index === 5 ? (
        <g fill="#d5b777" stroke="#f3deb0" strokeWidth="2">
          {[12, 39, 66, 93, 120, 147, 174, 201, 228, 255].map((x, i) => (
            <path
              key={x}
              d={`M${x} 165 Q${x - 5} 110 ${x + 16} ${55 + (i % 2) * 15} Q${x + 6} 120 ${x + 21} 165Z`}
              opacity=".55"
            />
          ))}
          <path
            d="M141 165 Q122 138 155 104 Q142 134 175 165Z"
            fill="#f3d283"
          />
          <path
            d="M148 139 Q153 135 158 139 M155 150 L163 150"
            fill="none"
            stroke="#071522"
            strokeWidth="3"
          />
        </g>
      ) : index === 6 ? (
        <g>
          <path
            d="M40 100 Q20 60 75 58 Q87 19 133 48 Q181 18 207 63 Q266 55 272 107Z"
            fill="#67829b"
          />
          <path
            d="M158 79 L124 128 L150 127 L126 172 L195 105 L163 108Z"
            fill="#f5d98f"
          />
          <path
            d="M20 182 Q150 153 280 182"
            fill="none"
            stroke="#e4bb62"
            strokeWidth="4"
          />
        </g>
      ) : (
        <g>
          <path d="M18 166 L34 141 L56 139 L71 165Z" fill="#ad9980" />
          <path
            d="M82 151 H117 M109 144 L118 151 L109 158"
            fill="none"
            stroke="#efc86f"
            strokeWidth="3"
          />
          <path d="M128 172 L195 38 L274 172Z" fill="#8b9eaa" />
          <path d="M173 82 L195 38 L222 83 L200 69 L188 79Z" fill="#f8e7b0" />
        </g>
      )}
    </svg>
  );
}
