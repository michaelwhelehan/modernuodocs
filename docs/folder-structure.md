---
id: folder-structure
title: Folder Structure
---

After cloning, your project should look like this:

```
zuluhotel/
  Distribution/ <---------- Root configuration/data folder that gets copied to MUO on build
    Configuration/ <------- Configuration folder for overriding settings
      modernuo.json <------ Configuration file for overriding settings
    Data/ <---------------- Data folder for specifying all the data objects in the game
  ModernUO/ <-------------- ModernUO git submodule that gets automatically updated to point to the commit id the project depends on
  ZuluContent/ <----------- All the content scripts that are relevant to Zulu Hotel T2A Era
    =DEV=/ <--------------- Test scripts
    Accounting/ <---------- Account login/registration scripts
    Commands/ <------------ Generic in-game commands player/admin
    Configuration/ <------- Email/expansion settings
    Engines/ <------------- Engine scripts for crafting / harvesting / AI / spawning / party / help systems
    Gumps/ <--------------- Gump scripts for GUI in-game
    Items/ <--------------- Item scripts specifying items and their functionality
    Json/Converters/ <----- Convert data from JSON format
    Misc/ <---------------- Miscellaneous in-game systems
    Mobiles/ <------------- NPC / Player scripts
    Multis/ <-------------- Boats / Housing scripts
    Network/ <------------- Network packet scripts for handling the Classic UO Map interface in-game
    Regions/ <------------- Scripts defining the logic for what is allowed inside an area in-game
    Skills/ <-------------- Skill handling scripts
    Spells/ <-------------- Spell and spellbook handling scripts
    Targets/ <------------- Target handling scripts when selecting a target in-game
    Zulu/ <---------------- Very Zulu Hotel-specific features added on to the server
```

For the project to build, you must change the `dataDirectories` entry in the `Distribution/Configuration/modernuo.json` to the root of your UO client installation directory (default is `/app/client/` for docker) e.g.

```json
  "dataDirectories": [
    "C:\\Program Files (x86)\\Ultima Online Classic\\"
  ],
```

Do not change anything inside the `ModernUO/` directory as many files inside `ModernUO/Distribution/` will be overwritten on every build.

If you need to change something in the Data files rather do it inside the root `zuluhotel/Distribution/` directory.
