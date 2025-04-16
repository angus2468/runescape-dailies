import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col text-slate-200 p-3 text-xl items-center">
        <h1 className="text-3xl">Shop Runs</h1>
        <div className="grid-cols-3 grid p-3 w-full gap-2">
          <div className="flex flex-col text-slate-200 text-xl bg-blue-500 rounded-md p-2 m-2">
            <h1>Rune Run:</h1>
            <div>
              <ul>
                1. Edgeville lodestone -{" "}
                <a
                  href={"https://runescape.wiki/w/Battle_Runes"}
                  className="underline"
                  target="_blank"
                >
                  Wildy Mage
                </a>
              </ul>
              <ul>
                2. Wilderness lever -{" "}
                <a
                  href={
                    "https://runescape.wiki/w/Lundail%27s_Arena-side_Rune_Shop"
                  }
                  className="underline"
                  target="_blank"
                >
                  Lundail
                </a>
              </ul>
              <ul>
                3. Burthorpe lodestone -{" "}
                <a
                  href={
                    "https://runescape.wiki/w/Lundail%27s_Arena-side_Rune_Shop"
                  }
                  className="underline"
                  target="_blank"
                >
                  Carwen Essencebinder Magical Runes Shop
                </a>
              </ul>
              <ul>
                4. Varrock lodestone -{" "}
                <a
                  href={"https://runescape.wiki/w/Aubury%27s_Rune_Shop"}
                  className="underline"
                  target="_blank"
                >
                  Aubury&apos;s Rune Shop
                </a>
              </ul>
              <ul>
                5. Al Kharid lodestone -{" "}
                <a
                  href={"https://runescape.wiki/w/Ali%27s_Discount_Wares"}
                  className="underline"
                  target="_blank"
                >
                  Ali&apos;s Discount Wares
                </a>
              </ul>
              <ul>
                6. Port Sarim lodestone -{" "}
                <a
                  href={"https://runescape.wiki/w/Betty%27s_Magic_Emporium"}
                  className="underline"
                  target="_blank"
                >
                  Betty&apos;s Magic Emporium
                </a>
              </ul>
              <ul>
                7. Port Sarim lodestone -{" "}
                <a
                  href={"https://runescape.wiki/w/Void_Knight_Magic_Store"}
                  className="underline"
                  target="_blank"
                >
                  Void Knight Magic Store
                </a>
              </ul>
              <ul>
                8. Yanille lodestone (Watchtower teleport) -{" "}
                <a
                  href={
                    "https://runescape.wiki/w/Magic_Guild_Store_-_Runes_and_Staves"
                  }
                  className="underline"
                  target="_blank"
                >
                  Magic Guild Store
                </a>
              </ul>
              <ul>
                9. Lunar Isle lodestone -{" "}
                <a
                  href={"https://runescape.wiki/w/Baba_Yaga%27s_Magic_Shop"}
                  className="underline"
                  target="_blank"
                >
                  Baba Yaga&apos;s Magic Shop
                </a>
              </ul>
              <ul>
                10. Ape Atoll Teleport -{" "}
                <a
                  href={"https://runescape.wiki/w/Tutab%27s_Magical_Market"}
                  className="underline"
                  target="_blank"
                >
                  Tutab&apos;s Magical Market
                </a>
              </ul>
              <ul>
                11. Anachronia lodestone -{" "}
                <a
                  href={"https://runescape.wiki/w/Rune_store_assistant"}
                  className="underline"
                  target="_blank"
                >
                  Rune store assistant
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
