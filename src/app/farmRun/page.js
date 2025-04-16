export default function Page() {
  return (
    <>
      <div className="flex flex-col text-slate-200 p-3 text-xl items-center">
        <h1 className="text-3xl">Farm Runs</h1>
        <div className="grid-cols-3 grid p-3 w-full gap-2">
          <div className="bg-blue-500 rounded-md p-2">
            <h1 className="text-2xl">Herb Patches:</h1>
            <ul>1. Ectophial - West of Port Phasmatys</ul>
            <ul>2. Explorer&apos;s ring - South of Falador</ul>
            <ul>3. Mystical sand seed - Garden of Kharid</ul>
            <ul>4. Modified botanist&apos;s mask - North of Catherby</ul>
            <ul>5. Manor farm Teleport - North of Ardougne</ul>
            <ul>6. Trollheim farm teleport spell - Roof of Troll Stronghold</ul>
            <ul>
              7. Crystal teleport seed to Crwys district - Inner circle of the
              Crwys district of Prifddinas
            </ul>
            <ul>
              8. Wilderness sword - North of the Wilderness Crater in the
              Wilderness
            </ul>
          </div>
          <div className="bg-blue-500 rounded-md p-2">
            <h1 className="text-2xl">Bushes:</h1>
            <ul>1. Varrock lodestone - West of Champions&apos; Guild</ul>
            <ul>2. House Teleport to Rimmington - Rimmington</ul>
            <ul>3. Teleport to Kandarin Monastery - South of Ardougne</ul>
            <ul>
              4. Crystal teleport seed to Crwys section - Inner circle of the
              Crwys Clan of Prifddinas
            </ul>
            <ul>5. Spirit tree (7) - South-west Etceteria</ul>
          </div>
          <div className="bg-blue-500 rounded-md p-2">
            <h1 className="text-2xl">Fruit Tree:</h1>
            <ul>1. Spirit tree 2 - Tree Gnome Stronghold</ul>
            <ul>2. Catherby lodestone - East of Catherby</ul>
            <ul>3. Crystal teleport seed (1) - Lletya</ul>
            <ul>
              4. Crystal teleport seed (9) - Meilyr Clan section in the north
              north east of Prifddinas
            </ul>
            <ul>5. Gnome glider (7) - West of Tree Gnome Village maze</ul>
            <ul>6. Juju teleport spiritbag - Herblore Habitat</ul>
            <ul>7. Karamja lodestone - North of Brimhaven</ul>
          </div>
          <div className="bg-blue-500 rounded-md p-2">
            <h1 className="text-2xl">Mushrooms:</h1>
            <ul>1. Fairy ring code CKS - West of Canifis</ul>
            <ul>
              2. Tirannwn lodestone - South-west of Tirannwn lodestone, Isafdar
            </ul>
            <ul>
              3. Passing bracelet (Option 1: Hanging Gardens) - East of City of
              Um
            </ul>
          </div>
          <div className="bg-blue-500 rounded-md p-2">
            <h1 className="text-2xl">Cacti:</h1>
            <ul>1. Al Kharid lodestone - Al Kharid</ul>
            <ul>2. Walk there - Het&apos;s Oasis</ul>
            <ul>3. Anachronia Teleport (North Island) - Anachronia</ul>
            <ul>4. Fairy ring code CKS - West of Canifis</ul>
          </div>
        </div>
      </div>
    </>
  );
}
