const SJB = extend(BeamDrill, "steam-jet-bore", {
    consumePower(0.5);
    consumeLiquid(Liquids.hydrogen, 0.5f / 60f);
    consumeLiquid(Liquids.nitrogen, 3f / 60f).boost();
})