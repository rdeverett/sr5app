import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  public MAX_DESCRIPTION_LENGTH = 350;  

  public characterPortraitIndex = 0;

  private physicalDamageTrack = 
  {
     "number":[
        {
           "value": "1",
           "status": ["enabled", "disabled"]
         },
         {
            "value": "2",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "3",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "4",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "5",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "6",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "7",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "8",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "9",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "10",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "11",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "12",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "13",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "14",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "15",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "16",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "17",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "18",
            "status": ["enabled", "disabled"]
          }]
  }

  private stunDamageTrack = 
  {
     "number":[
        {
           "value": "1",
           "status": ["enabled", "disabled"]
         },
         {
            "value": "2",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "3",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "4",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "5",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "6",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "7",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "8",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "9",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "10",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "11",
            "status": ["enabled", "disabled"]
          },
          {
            "value": "12",
            "status": ["enabled", "disabled"]
          }]
  }
  
  
  private characterPortraits = ['../assets/imgs/elves/shadowrunElfFemaleBlondeShortHair.jpg', '../assets/imgs/elves/shadowrunElfFemaleBurnetteHair.jpg',
  "../assets/imgs/elves/shadowrunElfFemaleGreenShortHair.jpg", "../assets/imgs/elves/shadowrunElfMaleBlackLongHair.jpg",
  "../assets/imgs/elves/shadowrunElfMaleLongBurnetteHair.jpg", "../assets/imgs/elves/shadowrunElfMaleShortWhiteHair.jpg",
  "../assets/imgs/humans/shadowrunHumanBlackShortHair.jpg", "../assets/imgs/humans/shadowrunHumanFemaleBurnetteHair.jpg",
  "../assets/imgs/humans/shadowrunHumanFemaleLongBlondeHair.jpg", "../assets/imgs/humans/shadowrunHumanMaleBlackHair.jpg", 
  "../assets/imgs/humans/shadowrunHumanMaleBlondeHair.jpg", "../assets/imgs/humans/shadowrunHumanMaleShavedHead.jpg",
  "../assets/imgs/orks/shadowrunOrkFemaleBurnetteHair.jpg", "../assets/imgs/orks/shadowrunOrkFemaleRedShortHair.jpg",
  "../assets/imgs/orks/shadowrunOrkFemaleShortBlondeHair.jpg", "../assets/imgs/orks/shadowrunOrkMaleBlackBraidedHair.jpg",
  "../assets/imgs/orks/shadowrunOrkMaleShortBlackHair.jpg", "../assets/imgs/orks/shadowrunOrkMaleShortBlondeHair.jpg"];

  private data = {
    "public": {
       "program": {
          "name": "Hero Lab",
          "url": "https://www.wolflair.com",
          "programinfo": "Hero Lab and the Hero Lab logo are Registered Trademarks of LWD Technology, Inc. Free download at https://www.wolflair.com\nShadowrun © 2005-2018 The Topps Company, Inc. All rights reserved. Shadowrun is a registered trademark of The Topps Company, Inc.",
          "version": {
             "version": "8.8",
             "primary": "8",
             "secondary": "8",
             "tertiary": "",
             "build": "825"
          }
       },
       "localization": {
          "language": "eng",
          "units": "metric"
       },
       "character": {
          "active": "yes",
          "characterindex": "1",
          "nature": "normal",
          "role": "pc",
          "relationship": "ally",
          "name": "Desta",
          "playername": "",
          "race": {
             "name": "Human"
          },
          "heritage": {
             "name": ""
          },
          "creation": {
             "bp": {
                "total": "25",
                "left": "0"
             }
          },
          "karma": {
             "total": "0",
             "left": "0"
          },
          "cash": {
             "total": "1000"
          },
          "personal": {
             "gender": "Male",
             "age": "25",
             "hair": "",
             "eyes": "",
             "skin": "",
             "description": [],
             "charheight": {
                "text": "1.75m",
                "value": "175"
             },
             "charweight": {
                "text": "78kg",
                "value": "78"
             }
          },
          "defenses": [
             {
                "name": "Ranged Defense",
                "normal": "8"
             },
             {
                "name": "Melee Defense",
                "normal": "8"
             }
          ],
          "armorratings": [
             {
                "name": "Armor",
                "rating": "9",
                "stacking": "0",
                "nonstacking": "9",
                "dicepool": "13"
             },
             {
                "name": "Acid Protection",
                "rating": "9",
                "stacking": "9",
                "nonstacking": "0",
                "dicepool": "13"
             },
             {
                "name": "Cold Protection",
                "rating": "9",
                "stacking": "9",
                "nonstacking": "0",
                "dicepool": "13"
             },
             {
                "name": "Electricity Protection",
                "rating": "9",
                "stacking": "9",
                "nonstacking": "0",
                "dicepool": "13"
             },
             {
                "name": "Fire Protection",
                "rating": "9",
                "stacking": "9",
                "nonstacking": "0",
                "dicepool": "13"
             },
             {
                "name": "Falling Protection",
                "rating": "9",
                "stacking": "9",
                "nonstacking": "0",
                "dicepool": "13"
             },
             {
                "name": "Fatigue Resistance",
                "rating": "0",
                "stacking": "0",
                "nonstacking": "0",
                "dicepool": "7"
             }
          ],
          "attributes": [
             {
                "name": "Body",
                "text": "4",
                "base": "4",
                "modified": "4",
                "naturalmaximum": "6",
                "augmentedmaximum": "8",
                "minimum": "1",
                "category": "Physical",
                "description": "Body measures your physical health and resiliency.\n\nIt affects how much damage you can take and stay on your feet, how well you resist damage coming your way, your ability to recover from poisons and diseases, and things of that nature.",
                "traitcost": {
                   "bp": "3"
                }
             },
             {
                "name": "Agility",
                "text": "5",
                "base": "5",
                "modified": "5",
                "naturalmaximum": "6",
                "augmentedmaximum": "9",
                "minimum": "1",
                "category": "Physical",
                "description": "Agility measures things like hand-eye coordination, flexibility, nimbleness, and balance. Agility is the most important attribute when it comes to scoring hits during combat, as you need to be coordinated to land your blows, whether you're swinging a sword or carefully aiming a rifle. It also is critical in non-combat situations, such as sneaking quietly past security guards or smoothly lifting a keycard from its secured position.",
                "traitcost": {
                   "bp": "4"
                }
             },
             {
                "name": "Reaction",
                "text": "5",
                "base": "5",
                "modified": "5",
                "naturalmaximum": "6",
                "augmentedmaximum": "9",
                "minimum": "1",
                "category": "Physical",
                "description": "Reaction is about reflexes, awareness, and your character's ability to respond to events happening around them. Reaction plays an important role in deciding how soon characters act in combat and how skilled they are in avoiding attacks from others. It also helps you make that quick turn down a narrow alley on your cycle to avoid the howling gangers on your tail",
                "traitcost": {
                   "bp": "4"
                }
             },
             {
                "name": "Strength",
                "text": "3",
                "base": "3",
                "modified": "3",
                "naturalmaximum": "6",
                "augmentedmaximum": "7",
                "minimum": "1",
                "category": "Physical",
                "description": "Strength is an indicator of, well, how strong your character is. The higher your strength, the more damage you'll do when you're raining blows down on an opponent, and the more you'll be able to move or carry when there's stuff that needs to be moved. Or carried.\n\nStrength is also important with athletic tasks such as climbing, running, and swimming.",
                "traitcost": {
                   "bp": "2"
                }
             },
             {
                "name": "Willpower",
                "text": "3",
                "base": "3",
                "modified": "3",
                "naturalmaximum": "6",
                "augmentedmaximum": "7",
                "minimum": "1",
                "category": "Mental",
                "description": "Willpower is your character's desire to push through adversity, to resist the weariness of spellcasting, and to stay upright after being nailed in the head with a sap.\n\nWhether you're testing yourself against a toxic wilderness or a pack of leather-clad orks with crowbars, Willpower will help you make it through.",
                "traitcost": {
                   "bp": "2"
                }
             },
             {
                "name": "Logic",
                "text": "3",
                "base": "3",
                "modified": "3",
                "naturalmaximum": "6",
                "augmentedmaximum": "7",
                "minimum": "1",
                "category": "Mental",
                "description": "The Logic attribute measures the cold, calculating power of your rational mind. Whether you are attempting to repair complicated machinery or patch up an injured teammate, Logic helps you get things right. Logic is also the attribute hermetic mages use to resist Drain from the spells they rain down on their hapless foes.\n\nDeckers also find Logic extremely useful, as it helps them develop the attacks and counterattacks that are part of their online battles.",
                "traitcost": {
                   "bp": "2"
                }
             },
             {
                "name": "Intuition",
                "text": "3",
                "base": "3",
                "modified": "3",
                "naturalmaximum": "6",
                "augmentedmaximum": "7",
                "minimum": "1",
                "category": "Mental",
                "description": "Intuition is the voice of your gut, the instinct that tells you things before your logical brain can figure them out. Intuition helps you anticipate ambushes, notice that something is amiss or out of place, and stay on the trail of someone you're pursuing.",
                "traitcost": {
                   "bp": "2"
                }
             },
             {
                "name": "Charisma",
                "text": "2",
                "base": "2",
                "modified": "2",
                "naturalmaximum": "6",
                "augmentedmaximum": "6",
                "minimum": "1",
                "category": "Mental",
                "description": "Charisma is your force of personality, the persuasiveness and charm you can call on to get people to do what you want without having to go to the trouble of pulling a gun on them. It's not entirely about your appearance, but it's also not entirely not about your appearance. What it's mostly about is how you use what you have - your voice, your face, your words, and all the tools at your disposal - to charm and/or intimidate the people you encounter. Additionally, Charisma is an important attribute for shamanic mages, as it helps them resist the damaging Drain from spells they cast.",
                "traitcost": {
                   "bp": "1"
                }
             },
             {
                "name": "Essence",
                "text": "1.45",
                "base": "1",
                "modified": "1.45",
                "naturalmaximum": "12",
                "augmentedmaximum": "5.45",
                "minimum": "0",
                "category": "Derived",
                "description": "Essence is your metahumanity encapsulated in a number. In Shadowrun, you have ample opportunities to alter your body or push it beyond its normal limits. Such actions often have a cost, and they can result in a loss of a portion of your metahumanity, which means a loss of Essence points. Each character starts with an Essence rating of 6, and it acts as a cap on the amount of alterations you can adopt. When it's gone, it doesn't come back. It also affects the Magic and Resonance attributes, as losses in Essence are reflected by losses in Magic and Resonance.\n\nWhile denizens of the Sixth World are accustomed to seeing a variety of augmentations and alterations to the metahuman form, the \"uncanny valley\" still exists. The uncanny valley is the disconcerting effect that happens when people see something that is almost, but not quite, metahuman. An animated cartoon with exaggerated features looks fine to metahuman eyes, but a computer program that closely, but not exactly, replicates human appearance is a troubling and unpleasant sight to most viewers. This is what happens when people see others with augmentations - on some level, people notice there is something less (or more) human about that, and they respond to it negatively. The change may not be exactly visible, but it is in some way noticeable - in one way or another, a person has become less human, and on some level other people notice this. This is why a character's Essence is included in the calculation of their Social limit.",
                "traitcost": {
                   "bp": "0"
                }
             },
             {
                "name": "Edge",
                "text": "7",
                "base": "7",
                "modified": "7",
                "naturalmaximum": "7",
                "augmentedmaximum": "11",
                "minimum": "1",
                "category": "Special",
                "description": "Edge is the ultimate intangible, that certain something that provides a boost when you need it, that gets you out of a tough spot when the chips are down. It's not used to calculate dice pools; instead, you spend a point of Edge to acquire a certain effect. Every character has at least one point of Edge, more if they want to take more frequent advantage of the boosts it offers. The possible effects of and more details about Edge are on p. 56.",
                "traitcost": {
                   "bp": "5"
                }
             },
             {
                "name": "Initiative",
                "text": "8+1D6",
                "base": "8",
                "modified": "8",
                "naturalmaximum": "12",
                "augmentedmaximum": "12",
                "minimum": "2",
                "category": "Derived",
                "description": "Initiative governs how quickly a character responds in a combat situation. A character's Initiative attribute is their Reaction plus their Intuition.",
                "traitcost": {
                   "bp": "0"
                }
             }
          ],
          "movementtypes": [
             {
                "name": "Land Movement",
                "sprintpool": "8dicepool [5]",
                "walking": {
                   "text": "10m",
                   "value": "10"
                },
                "running": {
                   "text": "20m",
                   "value": "20"
                }
             },
             {
                "name": "Swimming",
                "sprintpool": "2dicepool",
                "running": {
                   "text": "4m",
                   "value": "4"
                }
             }
          ],
          "reputations": [
             {
                "name": "Street Cred",
                "value": "0"
             },
             {
                "name": "Notoriety",
                "value": "0"
             },
             {
                "name": "Public Awareness",
                "value": "0"
             }
          ],
          "qualities": {
             "positive": [
                {
                   "name": "Ambidexterous",
                   "description": "The Ambidextrous character can handle objects equally well with either hand. Without this quality, any action performed solely with the off - hand (i.e., firing a gun) suffers a -2 dice pool modifier (see Attacker Using Off-Hand Weapon, p. 178).",
                   "traitcost": {
                      "bp": "4"
                   }
                },
                {
                   "name": "Catlike",
                   "description": "A character with the Catlike quality is gifted with an uncanny elegance, a stealthy gait, and an almost preternatural ability to move without making a sound. They also claim they land on their feet when dropped, though they tend not to let people test this. This quality adds a +2 dice pool modifier to Sneaking skill tests.",
                   "traitcost": {
                      "bp": "7"
                   }
                },
                {
                   "name": "Natural Athlete",
                   "description": "A character with this quality has an innate combination of physical fitness, spatial awareness, and natural athletic or gymnastic talent. While the character may not be a world-class athlete and may require training to achieve peak performance, he is in prime physical shape for his size and weight class. The Natural Athlete adds a +2 dice pool modifier for Running and Gymnastics skill tests.",
                   "traitcost": {
                      "bp": "7"
                   }
                },
                {
                   "name": "Quick Healer",
                   "description": "A character with the Quick Healer quality receives a +2 dice pool modifier to all Healing Tests made on/for/by her, including magical healing",
                   "traitcost": {
                      "bp": "3"
                   }
                },
                {
                   "name": "Resistance to Toxins",
                   "description": "A character with Resistance to Pathogens/Toxins can fight off diseases and drugs more easily than other characters and receives a +1 dice pool modifier to Resistance Tests. This quality comes at two levels: at 4 Karma the character is resistant to either pathogens or toxins, not both. If the character purchases this quality at 8 Karma, she receives the +1 modifier for resisting both.",
                   "traitcost": {
                      "bp": "4"
                   }
                }
             ],
             "negative": []
          },
          "skills": {
             "groups": [],
             "active": [
                {
                   "name": "Blades",
                   "text": "2",
                   "base": "2",
                   "modified": "2",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "3",
                   "dicepool": "7",
                   "group": "Close Combat Group",
                   "description": "Slice and dice! The Blades skill includes the use of all handheld slashing and stabbing weapons. You can use a range of edged weapons including daggers, swords, and axes.",
                   "traitcost": {
                      "bp": "2"
                   }
                },
                {
                   "name": "Escape Artist",
                   "text": "3",
                   "base": "3",
                   "modified": "3",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "5",
                   "dicepool": "8",
                   "group": "",
                   "description": "Escape Artist measures the character's ability to escape from bindings by using body contortion and manual dexterity. See Using Escape Artist, p. 135.",
                   "traitcost": {
                      "bp": "3"
                   }
                },
                {
                   "name": "First Aid",
                   "text": "2",
                   "base": "2",
                   "modified": "2",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "3",
                   "dicepool": "7",
                   "group": "Biotech Group",
                   "description": "First Aid is the ability to provide emergency medical assistance similar to that of a paramedic. This skill may be used to stabilize wounds and prevent characters from dying. First Aid cannot be used to perform surgery or repair damaged implants. For more information, see Healing, p. 205.",
                   "traitcost": {
                      "bp": "2"
                   }
                },
                {
                   "name": "Medicine",
                   "text": "3",
                   "base": "3",
                   "modified": "3",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "5",
                   "dicepool": "6",
                   "group": "Biotech Group",
                   "description": "Medicine is used to perform advanced medical procedures such as surgeries. It includes long-term medical support for disease and illness, and the skill can be used to diagnose a character's medical condition. This skill is used to implant or remove cybernetics and bioware but cannot be used to repair or maintain implanted devices. For more information, see Healing, p. 205.",
                   "traitcost": {
                      "bp": "3"
                   }
                },
                {
                   "name": "Perception",
                   "text": "4",
                   "base": "4",
                   "modified": "4",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "6",
                   "dicepool": "7",
                   "group": "",
                   "description": "Perception refers to the ability to spot anomalies in everyday situations, making it one of the key skills a shadowrunner needs. See Using Perception, p. 135.",
                   "traitcost": {
                      "bp": "4"
                   }
                },
                {
                   "name": "Pistols",
                   "text": "5",
                   "base": "5",
                   "modified": "5",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "8",
                   "dicepool": "10",
                   "group": "Firearms Group",
                   "description": "This skill category includes all types of handheld pistols, including tasers, single-shots, semi-automatics, and revolvers.",
                   "traitcost": {
                      "bp": "5"
                   }
                },
                {
                   "name": "Running",
                   "text": "3",
                   "base": "3",
                   "modified": "3",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "5",
                   "dicepool": "8",
                   "group": "Athletics Group",
                   "description": "Running, as you may guess, is about how much ground you can cover quickly. For more information see Using Running, p. 136.",
                   "traitcost": {
                      "bp": "3"
                   }
                }
             ],
             "knowledge": [
                {
                   "name": "German",
                   "text": "2",
                   "base": "2",
                   "modified": "2",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "3",
                   "dicepool": "5",
                   "group": "",
                   "description": [],
                   "traitcost": {
                      "bp": "2"
                   }
                },
                {
                   "name": "Japanese",
                   "text": "2",
                   "base": "2",
                   "modified": "2",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "3",
                   "dicepool": "5",
                   "group": "",
                   "description": [],
                   "traitcost": {
                      "bp": "2"
                   }
                },
                {
                   "name": "Organized Crime",
                   "text": "3",
                   "base": "3",
                   "modified": "3",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "5",
                   "dicepool": "6",
                   "group": "",
                   "description": [],
                   "traitcost": {
                      "bp": "3"
                   }
                },
                {
                   "name": "Smugglers",
                   "text": "3",
                   "base": "3",
                   "modified": "3",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "5",
                   "dicepool": "6",
                   "group": "",
                   "description": [],
                   "traitcost": {
                      "bp": "3"
                   }
                },
                {
                   "name": "Street Gang Identification",
                   "text": "2",
                   "base": "2",
                   "modified": "2",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "3",
                   "dicepool": "5",
                   "group": "",
                   "description": [],
                   "traitcost": {
                      "bp": "2"
                   }
                }
             ],
             "language": {
                "skill": {
                   "name": "English",
                   "text": "N",
                   "base": "1",
                   "modified": "1",
                   "naturalmaximum": "6",
                   "augmentedmaximum": "2",
                   "dicepool": "4",
                   "group": "",
                   "description": [],
                   "traitcost": {
                      "bp": "0"
                   }
                }
             }
          },
          "gear": {
             "augmentations": {
                "cyberware": [
                   {
                      "name": "Cyber Arm (Synthetic)",
                      "essencecost": "1",
                      "quantity": "1",
                      "wireless": "Present",
                      "description": "In today's world of transplant-friendly bioware, the use of cyberlimbs is sometimes viewed as crude and outdated. On the other hand, they are cheap and easy to service and upgrade, so in the end they became even more popular for the less fortunate. Since cyberlimbs are more capable than most natural limbs, and you can load them up with all sorts of wiz tech, this kind of cyberware has stayed in high demand.\n\nCyberskulls and - torsos are included in the \"cyberlimbs\" category, though they are in fact shells rather than full replacements (or actual limbs).\n\nCyberlimbs have their own Strength and Agility ratings. When a particular limb is used for a test (such as leading an attack with your cyberarm), use the attribute for that limb (natural or cyber); in any other case, take the average value of all limbs involved in the task. If a task requires the careful coordination of several limbs, use the value of the weakest limb. The attributes of partial limbs (including cyberhands and - feet) may be enhanced, but their attributes only apply for tests directly involving those limbs (such as a Strength Test when gripping something with an enhanced cyberhand). Cyberlimbs cannot hold any bioware, nor any cyber-implants that take up Essence rather than Capacity. Essence cost, Capacity, and other stats can be found on the Cyberlimb table.\n\nCyberlimbs have other useful features. They give you 1 extra damage box on your Physical Condition Monitor for each cyberlimb you possess (ignore hands and feet, and partial limbs count for half a limb). They have Capacity, letting you add cyberweapons and other cyber systems that have a Capacity cost {in brackets}. They can perform at superhuman levels with the right enhancements. Cyberlimbs can be dangerous even if they don't have cyberweapons installed - their unarmed Damage Value is (STR)P.\n\nCyberlimbs: These prosthetics are basic off-the-shelf models. All standard cyberlimbs come with Strength and Agility attributes of 3. These values can only be augmented by cyberlimb enhancements, not other augmentations.\n\nCustomization: You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.\n\nCyberlimbs may be either obvious or synthetic.\n\nObvious cyberlimbs: These implants are immediately recognizable as artificial limbs unless you cover them with clothing. They are often chromed or matte colors but visibly mechanical in nature. Some folks like them glaringly obvious and outlandish, some find the artificiality repellant and disturbing. This can affect your social dealings in some circles, especially upper-crust society and the purist crowd.\n\nSynthetic cyberlimbs: Synthetic limbs are disguised as natural limbs. The fact that they're cybernetic gives them a -8 Concealability (the Cybertechnology skill may replace Perception for this test) when someone's just looking, but synthetic limbs are obviously artificial to the touch.",
                      "gearcost": {
                         "text": "20,000¥",
                         "value": "20000"
                      },
                      "availability": {
                         "text": "4",
                         "value": "4"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "armorinfo": {
                         "rating": "+0",
                         "acid": "0",
                         "cold": "0",
                         "electricity": "0",
                         "falling": "0",
                         "fire": "0",
                         "radiation": "0",
                         "laser": "0",
                         "equipped": "yes"
                      },
                      "modifications": [
                         {
                            "name": "Cyberlimb Agility",
                            "rating": "3",
                            "useradded": "no",
                            "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                            "gearcost": {
                               "text": "0¥",
                               "value": "0"
                            },
                            "availability": {
                               "text": "",
                               "value": "0"
                            },
                            "matrix": [
                               {
                                  "name": "Attack",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Sleaze",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Data Processing",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               },
                               {
                                  "name": "Firewall",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               }
                            ]
                         },
                         {
                            "name": "Cyberlimb Strength",
                            "rating": "3",
                            "useradded": "no",
                            "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                            "gearcost": {
                               "text": "0¥",
                               "value": "0"
                            },
                            "availability": {
                               "text": "",
                               "value": "0"
                            },
                            "matrix": [
                               {
                                  "name": "Attack",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Sleaze",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Data Processing",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               },
                               {
                                  "name": "Firewall",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               }
                            ]
                         }
                      ],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Cyber Leg (Synthetic)",
                      "essencecost": "1",
                      "quantity": "1",
                      "wireless": "Present",
                      "description": "In today's world of transplant-friendly bioware, the use of cyberlimbs is sometimes viewed as crude and outdated. On the other hand, they are cheap and easy to service and upgrade, so in the end they became even more popular for the less fortunate. Since cyberlimbs are more capable than most natural limbs, and you can load them up with all sorts of wiz tech, this kind of cyberware has stayed in high demand.\n\nCyberskulls and - torsos are included in the \"cyberlimbs\" category, though they are in fact shells rather than full replacements (or actual limbs).\n\nCyberlimbs have their own Strength and Agility ratings. When a particular limb is used for a test (such as leading an attack with your cyberarm), use the attribute for that limb (natural or cyber); in any other case, take the average value of all limbs involved in the task. If a task requires the careful coordination of several limbs, use the value of the weakest limb. The attributes of partial limbs (including cyberhands and - feet) may be enhanced, but their attributes only apply for tests directly involving those limbs (such as a Strength Test when gripping something with an enhanced cyberhand). Cyberlimbs cannot hold any bioware, nor any cyber-implants that take up Essence rather than Capacity. Essence cost, Capacity, and other stats can be found on the Cyberlimb table.\n\nCyberlimbs have other useful features. They give you 1 extra damage box on your Physical Condition Monitor for each cyberlimb you possess (ignore hands and feet, and partial limbs count for half a limb). They have Capacity, letting you add cyberweapons and other cyber systems that have a Capacity cost {in brackets}. They can perform at superhuman levels with the right enhancements. Cyberlimbs can be dangerous even if they don't have cyberweapons installed - their unarmed Damage Value is (STR)P.\n\nCyberlimbs: These prosthetics are basic off-the-shelf models. All standard cyberlimbs come with Strength and Agility attributes of 3. These values can only be augmented by cyberlimb enhancements, not other augmentations.\n\nCustomization: You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.\n\nCyberlimbs may be either obvious or synthetic.\n\nObvious cyberlimbs: These implants are immediately recognizable as artificial limbs unless you cover them with clothing. They are often chromed or matte colors but visibly mechanical in nature. Some folks like them glaringly obvious and outlandish, some find the artificiality repellant and disturbing. This can affect your social dealings in some circles, especially upper-crust society and the purist crowd.\n\nSynthetic cyberlimbs: Synthetic limbs are disguised as natural limbs. The fact that they're cybernetic gives them a -8 Concealability (the Cybertechnology skill may replace Perception for this test) when someone's just looking, but synthetic limbs are obviously artificial to the touch.",
                      "gearcost": {
                         "text": "20,000¥",
                         "value": "20000"
                      },
                      "availability": {
                         "text": "4",
                         "value": "4"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "armorinfo": {
                         "rating": "+0",
                         "acid": "0",
                         "cold": "0",
                         "electricity": "0",
                         "falling": "0",
                         "fire": "0",
                         "radiation": "0",
                         "laser": "0",
                         "equipped": "yes"
                      },
                      "modifications": [
                         {
                            "name": "Cyberlimb Agility",
                            "rating": "3",
                            "useradded": "no",
                            "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                            "gearcost": {
                               "text": "0¥",
                               "value": "0"
                            },
                            "availability": {
                               "text": "",
                               "value": "0"
                            },
                            "matrix": [
                               {
                                  "name": "Attack",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Sleaze",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Data Processing",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               },
                               {
                                  "name": "Firewall",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               }
                            ]
                         },
                         {
                            "name": "Cyberlimb Strength",
                            "rating": "3",
                            "useradded": "no",
                            "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                            "gearcost": {
                               "text": "0¥",
                               "value": "0"
                            },
                            "availability": {
                               "text": "",
                               "value": "0"
                            },
                            "matrix": [
                               {
                                  "name": "Attack",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Sleaze",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Data Processing",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               },
                               {
                                  "name": "Firewall",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               }
                            ]
                         }
                      ],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Cyber Lower Leg (Synthetic)",
                      "essencecost": "0.45",
                      "quantity": "1",
                      "wireless": "Present",
                      "description": "In today's world of transplant-friendly bioware, the use of cyberlimbs is sometimes viewed as crude and outdated. On the other hand, they are cheap and easy to service and upgrade, so in the end they became even more popular for the less fortunate. Since cyberlimbs are more capable than most natural limbs, and you can load them up with all sorts of wiz tech, this kind of cyberware has stayed in high demand.\n\nCyberskulls and - torsos are included in the \"cyberlimbs\" category, though they are in fact shells rather than full replacements (or actual limbs).\n\nCyberlimbs have their own Strength and Agility ratings. When a particular limb is used for a test (such as leading an attack with your cyberarm), use the attribute for that limb (natural or cyber); in any other case, take the average value of all limbs involved in the task. If a task requires the careful coordination of several limbs, use the value of the weakest limb. The attributes of partial limbs (including cyberhands and - feet) may be enhanced, but their attributes only apply for tests directly involving those limbs (such as a Strength Test when gripping something with an enhanced cyberhand). Cyberlimbs cannot hold any bioware, nor any cyber-implants that take up Essence rather than Capacity. Essence cost, Capacity, and other stats can be found on the Cyberlimb table.\n\nCyberlimbs have other useful features. They give you 1 extra damage box on your Physical Condition Monitor for each cyberlimb you possess (ignore hands and feet, and partial limbs count for half a limb). They have Capacity, letting you add cyberweapons and other cyber systems that have a Capacity cost {in brackets}. They can perform at superhuman levels with the right enhancements. Cyberlimbs can be dangerous even if they don't have cyberweapons installed - their unarmed Damage Value is (STR)P.\n\nCyberlimbs: These prosthetics are basic off-the-shelf models. All standard cyberlimbs come with Strength and Agility attributes of 3. These values can only be augmented by cyberlimb enhancements, not other augmentations.\n\nCustomization: You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.\n\nCyberlimbs may be either obvious or synthetic.\n\nObvious cyberlimbs: These implants are immediately recognizable as artificial limbs unless you cover them with clothing. They are often chromed or matte colors but visibly mechanical in nature. Some folks like them glaringly obvious and outlandish, some find the artificiality repellant and disturbing. This can affect your social dealings in some circles, especially upper-crust society and the purist crowd.\n\nSynthetic cyberlimbs: Synthetic limbs are disguised as natural limbs. The fact that they're cybernetic gives them a -8 Concealability (the Cybertechnology skill may replace Perception for this test) when someone's just looking, but synthetic limbs are obviously artificial to the touch.",
                      "gearcost": {
                         "text": "12,000¥",
                         "value": "12000"
                      },
                      "availability": {
                         "text": "4",
                         "value": "4"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "armorinfo": {
                         "rating": "+0",
                         "acid": "0",
                         "cold": "0",
                         "electricity": "0",
                         "falling": "0",
                         "fire": "0",
                         "radiation": "0",
                         "laser": "0",
                         "equipped": "yes"
                      },
                      "modifications": [
                         {
                            "name": "Cyberlimb Agility",
                            "rating": "3",
                            "useradded": "no",
                            "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                            "gearcost": {
                               "text": "0¥",
                               "value": "0"
                            },
                            "availability": {
                               "text": "",
                               "value": "0"
                            },
                            "matrix": [
                               {
                                  "name": "Attack",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Sleaze",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Data Processing",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               },
                               {
                                  "name": "Firewall",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               }
                            ]
                         },
                         {
                            "name": "Cyberlimb Strength",
                            "rating": "3",
                            "useradded": "no",
                            "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                            "gearcost": {
                               "text": "0¥",
                               "value": "0"
                            },
                            "availability": {
                               "text": "",
                               "value": "0"
                            },
                            "matrix": [
                               {
                                  "name": "Attack",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Sleaze",
                                  "text": "0",
                                  "base": "0",
                                  "modified": "0"
                               },
                               {
                                  "name": "Data Processing",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               },
                               {
                                  "name": "Firewall",
                                  "text": "2",
                                  "base": "2",
                                  "modified": "2"
                               }
                            ]
                         }
                      ],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Low-Light Vision",
                      "essencecost": "0.1",
                      "wireless": "Present",
                      "description": "An implanted version of the low-light vision enhancement (p. 444).\n\nLow-Light Vision\nThis accessory allows you to see normally in light levels as low as starlight. It doesn't help in total darkness, though.",
                      "gearcost": {
                         "text": "1,500¥",
                         "value": "1500"
                      },
                      "availability": {
                         "text": "4",
                         "value": "4"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Sound Link",
                      "essencecost": "0.1",
                      "wireless": "Present",
                      "description": "The audio equivalent of image link, sound link can play audio (recordings, movie soundtracks, music, etc.) from linked sources within the user's PAN (or headware memory, or datajack) directly into the user's cyberears. A sound link is a common component of immersive AR environments, adding a sonic component.",
                      "gearcost": {
                         "text": "1,000¥",
                         "value": "1000"
                      },
                      "availability": {
                         "text": "4",
                         "value": "4"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Transys Avalon (Cyber)",
                      "essencecost": "0.2",
                      "wireless": "Present",
                      "description": "Basic Persona: Monarch\nBase Theme: Castle\nDevice Icon: Castle\nCommlinks are universal communication devices; they're used by everyone all the time. Commlinks are essentially the digital Swiss army knives of the modern world. Even the most basic of them includes AR Matrix browsing capability, multiple telephone and radio modes of real-time talk and text, music players, micro trid-projectors, touchscreen displays, built in high-resolution digital video and still image cameras, image/text and RFID tag scanners, built-in GPS guidance systems, chip players, credstick readers, retractable earbuds, voice-access dialing, text-to-speech and speech-to-text technologies, and a shock and water resistant case. And all of this at an inexpensive price that a few decades ago would have seemed absurd.",
                      "gearcost": {
                         "text": "7,000¥",
                         "value": "7000"
                      },
                      "availability": {
                         "text": "12",
                         "value": "12"
                      },
                      "matrix": {
                         "initiative": "9",
                         "dr": "12",
                         "matrixattribute": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "6",
                               "base": "6",
                               "modified": "6"
                            },
                            {
                               "name": "Firewall",
                               "text": "6",
                               "base": "6",
                               "modified": "6"
                            }
                         ]
                      },
                      "conditionmonitor": {
                         "name": "Transys Avalon (Cyber)",
                         "boxes": "11",
                         "penalty": "0"
                      },
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Ultrasound Sensor",
                      "essencecost": "0.25",
                      "rating": "1",
                      "wireless": "Present",
                      "description": "This cyberware is exactly like the ultrasound sensor. When active, it replaces your normal vision. It can be switched between active sonar, passive sonar, and off with a Free Action.\n\nUltrasound Sensor\nThe ultrasound accessory consists of an emitter that sends out continuous ultrasonic pulses and a receiver that picks up the echoes of these pulses to create a topographic ultrasound map. Ultrasound is perfect to \"see\" textures, calculate distances between objects, and pick up things otherwise invisible to the naked eye (like people cloaked by an Invisibility spell), it can't handle colors or brightness. It also can't penetrate materials like glass that would be transparent to optical sensors. You can set it to a passive mode, where it doesn't emit ultrasonic pulses but still picks up ultrasound from outside sources, such as motion sensors or someone else's ultrasound sensors on active mode (or bats).",
                      "gearcost": {
                         "text": "12,000¥",
                         "value": "12000"
                      },
                      "availability": {
                         "text": "10",
                         "value": "10"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Vision Enhancement",
                      "essencecost": "0.1",
                      "rating": "1",
                      "wireless": "Present",
                      "description": "An implanted version of vision enhancement (p. 444).\n\nVision Enhancement\nThis sharpens a character's vision at all ranges, providing visual acuity closer to that of the average hawk than that of the average metahuman. It adds its Rating as a positive modifier to your limit on visual Perception Tests.",
                      "gearcost": {
                         "text": "4,000¥",
                         "value": "4000"
                      },
                      "availability": {
                         "text": "3",
                         "value": "3"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Vision Magnification",
                      "essencecost": "0.1",
                      "wireless": "Present",
                      "description": "An implanted version of the vision magnification enhancement (p. 444).\n\nVision Magnification\nThis zoom function digitally magnifies vision by up to fifty times, allowing distant targets to be seen clearly. For rules on using vision magnification in ranged combat, see p. 177.",
                      "gearcost": {
                         "text": "2,000¥",
                         "value": "2000"
                      },
                      "availability": {
                         "text": "4",
                         "value": "4"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Voice Modulator",
                      "essencecost": "0.2",
                      "rating": "1",
                      "wireless": "Present",
                      "description": "This implant gives you perfect pitch and enormous vocal flexibility and distortion capabilities. You can speak with an increased volume (up to 100 decibels) without strain, shift your pitch to make perfect bird calls or mellifluous singing, and most importantly, uncanny vocal impressions. The modulator can also play back (and more or less perfectly imitate) a recorded or captured voice. Add the Rating of the modulator to your dice pool for Impersonation skill tests.",
                      "gearcost": {
                         "text": "5,000¥",
                         "value": "5000"
                      },
                      "availability": {
                         "text": "3F",
                         "value": "3"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   }
                ],
                "bioware": [
                   {
                      "name": "Adrenaline Pump",
                      "essencecost": "0.75",
                      "rating": "1",
                      "description": "This enhanced gland is implanted in the lower abdomen, connected to both supradrenal glands. When dormant, the pump is merely a reservoir for adrenaline. When activated, a small muscular sac contracts, sending a surge of concentrated adrenaline into the blood stream. Physical and emotional stress can force your pump to activate if you fail a Composure Test (p. 152); otherwise you can trigger it as a Free Action.\n\nWhile the pump is active, you ignore injury modifiers and don't fall unconscious, even if your Stun Condition Monitor is filled. You can't rest, but the adrenaline pump's Rating is added to your Strength, Agility, Reaction, and Willpower attributes. The pump works for Rating x 1D6 Combat Turns (the pump can't be switched off early). When time's up, you crash and take Stun damage equal to the number of Combat Turns the pump was active (use your natural Body + Willpower to resist the damage).\n\nAfter the effects end, your attribute values return to normal and you stop ignoring injury modifiers or unconsciousness from Stun damage. After use, the pump requires 1 hour to regenerate its supply. During that time, it cannot be activated.",
                      "gearcost": {
                         "text": "55,000¥",
                         "value": "55000"
                      },
                      "availability": {
                         "text": "6F",
                         "value": "6"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Sleep Regulator",
                      "essencecost": "0.1",
                      "description": "The sleep regulator is a modification to the hypothalamus, allowing for longer periods of wakefulness, an incredibly useful advantage for anyone with any profession, not just shadowrunners. You need less sleep per day and the sleep you get is deep and restful (and harder to wake you up from). The sleep regulator lets you get by with three hours of sleep each night and stay awake for twice as long as normal before having to resist sleep deprivation fatigue (p. 172). Resting hours for healing purposes are not affected.",
                      "gearcost": {
                         "text": "12,000¥",
                         "value": "12000"
                      },
                      "availability": {
                         "text": "6",
                         "value": "6"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   },
                   {
                      "name": "Toxin Extractor",
                      "essencecost": "0.2",
                      "rating": "1",
                      "description": "A specially cultivated cluster of cells in your liver improves its filtering capabilities. The toxin extractor adds its Rating as a dice pool modifier to all your Toxin Resistance Tests (Toxins, Drugs, and BTLs, p. 408).",
                      "gearcost": {
                         "text": "4,800¥",
                         "value": "4800"
                      },
                      "availability": {
                         "text": "3",
                         "value": "3"
                      },
                      "matrix": [
                         {
                            "name": "Attack",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Sleaze",
                            "text": "0",
                            "base": "0",
                            "modified": "0"
                         },
                         {
                            "name": "Data Processing",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         },
                         {
                            "name": "Firewall",
                            "text": "2",
                            "base": "2",
                            "modified": "2"
                         }
                      ],
                      "modifications": [],
                      "accessories": [],
                      "ammunition": [],
                      "programs": [],
                      "othergear": []
                   }
                ]
             },
             "weapons": [
                {
                   "name": "Ares Light Fire 75",
                   "quantity": "1",
                   "size": "Human/Elf/Ork Size",
                   "wireless": "Present",
                   "description": "Designed based on one of the most common pistols on the market, the Light Fire is a weapon for special operators, not commonly available through legal channels. A special barrel-mounted silencer developed exclusively for the Light Fire comes attached, applying an additional -1 dice pool modifier to the modifier usually provided by silencers. In addition to its integral silencer, the Ares Light Fire 75 includes a smartgun system.",
                   "gearcost": {
                      "text": "1,250¥",
                      "value": "1250"
                   },
                   "availability": {
                      "text": "6F",
                      "value": "6"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "weaponinfo": {
                      "grouptext": "Pistols",
                      "dicepool": "10dicepool [6]",
                      "damagetext": "6P",
                      "damagevalue": "6",
                      "damagetype": "Physical",
                      "ap": "0",
                      "modestext": "SA",
                      "isammunition": "0",
                      "recoilcomp": "2",
                      "equipped": "Main Hand",
                      "ammunitionused": {
                         "text": "16 (c)",
                         "count": "16",
                         "bins": "1"
                      },
                      "mode": "Semi-Automatic",
                      "ranges": {
                         "text": "5/15/30/50",
                         "range": [
                            {
                               "name": "Minimum",
                               "text": "0m",
                               "value": "0"
                            },
                            {
                               "name": "Short",
                               "text": "5m",
                               "value": "5"
                            },
                            {
                               "name": "Medium",
                               "text": "15m",
                               "value": "15"
                            },
                            {
                               "name": "Long",
                               "text": "30m",
                               "value": "30"
                            },
                            {
                               "name": "Extreme",
                               "text": "50m",
                               "value": "50"
                            }
                         ]
                      }
                   },
                   "modifications": [
                      {
                         "name": "Ares Light Fire Silencer",
                         "useradded": "no",
                         "quantity": "1",
                         "size": "Human/Elf/Ork Size",
                         "wireless": "Present",
                         "description": "This barrel-mounted accessory reduces the sound and flash of a weapon's discharge. It cannot be used with revolvers or shotguns. It applies a -5 dice pool modifier on all Perception Tests to notice the weapon's use or locate the weapon's firer. Attaching or removing a silencer takes a Complex Action.",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ],
                         "modifications": [],
                         "accessories": [],
                         "ammunition": [],
                         "programs": [],
                         "othergear": []
                      },
                      {
                         "name": "Smartgun System, Internal",
                         "useradded": "no",
                         "quantity": "1",
                         "size": "Human/Elf/Ork Size",
                         "wireless": "Present",
                         "description": "This connects a firearm or a projectile weapon directly to the user's smartlink. Incorporating a small camera and laser range finder, the smartlink keeps track of ammunition, heat buildup, and material stress. If you have a smartlink, you can mentally switch between gun modes, eject a clip, and fire the gun without pulling the trigger. The camera lets you shoot around corners without exposing yourself to return fire (at a -3 dice pool penalty). The system makes use of advanced calculation software, allowing for precisely calculated trajectories and high precision over any distance.\n\nIf you're using a smartlink, the smartgun system increases the gun's Accuracy by 2. The smartgun features are accessed either by universal access port cable to an imaging device (like glasses, goggles, or a datajack for someone with cybereyes) or by a wireless connection working in concert with direct neural interface.\n\nRetrofitting a firearm with an internal smartgun system doubles the weapon's price and adds 2 to its Availability. An external smartgun system can be attached to the top mount or underbarrel mount with an Armorer + Logic (4, 1 hour) Extended Test. The small camera has a capacity of 1 and can be equipped with vision enhancements (p. 444).",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ],
                         "modifications": [],
                         "accessories": [],
                         "ammunition": [],
                         "programs": [],
                         "othergear": []
                      }
                   ],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Ares Viper Slivergun",
                   "quantity": "1",
                   "size": "Human/Elf/Ork Size",
                   "wireless": "Present",
                   "description": "The sleek Slivergun pairs the undeniably winning combo of burst-fire capability and built-in sound suppression (an integral silencer, p. 432) with its large magazine capacity. It fires metal slivers that count as flechette ammunition, which is factored into the weapon's damage code.",
                   "gearcost": {
                      "text": "380¥",
                      "value": "380"
                   },
                   "availability": {
                      "text": "8F",
                      "value": "8"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "weaponinfo": {
                      "grouptext": "Pistols",
                      "dicepool": "10dicepool [4]",
                      "damagetext": "9P(f)",
                      "damagevalue": "9",
                      "damagetype": "Physical",
                      "ap": "4",
                      "modestext": "SA/BF",
                      "isammunition": "0",
                      "recoilcomp": "2",
                      "equipped": "Main Hand",
                      "ammunitionused": {
                         "text": "30 (c)",
                         "count": "30",
                         "bins": "1"
                      },
                      "mode": [
                         "Semi-Automatic",
                         "Burst Fire"
                      ],
                      "ranges": {
                         "text": "5/20/40/60",
                         "range": [
                            {
                               "name": "Minimum",
                               "text": "0m",
                               "value": "0"
                            },
                            {
                               "name": "Short",
                               "text": "5m",
                               "value": "5"
                            },
                            {
                               "name": "Medium",
                               "text": "20m",
                               "value": "20"
                            },
                            {
                               "name": "Long",
                               "text": "40m",
                               "value": "40"
                            },
                            {
                               "name": "Extreme",
                               "text": "60m",
                               "value": "60"
                            }
                         ]
                      }
                   },
                   "modifications": {
                      "item": {
                         "name": "Silencer/Suppressor",
                         "useradded": "no",
                         "quantity": "1",
                         "size": "Human/Elf/Ork Size",
                         "wireless": "Present",
                         "description": "This barrel-mounted accessory reduces the sound and flash of a weapon's discharge. It cannot be used with revolvers or shotguns. It applies a -4 dice pool modifier on all Perception Tests to notice the weapon's use or locate the weapon's firer. Attaching or removing a silencer takes a Complex Action.",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ],
                         "modifications": [],
                         "accessories": [],
                         "ammunition": [],
                         "programs": [],
                         "othergear": []
                      }
                   },
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Ares Viper Slivergun",
                   "quantity": "1",
                   "size": "Human/Elf/Ork Size",
                   "wireless": "Present",
                   "description": "The sleek Slivergun pairs the undeniably winning combo of burst-fire capability and built-in sound suppression (an integral silencer, p. 432) with its large magazine capacity. It fires metal slivers that count as flechette ammunition, which is factored into the weapon's damage code.",
                   "gearcost": {
                      "text": "380¥",
                      "value": "380"
                   },
                   "availability": {
                      "text": "8F",
                      "value": "8"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "weaponinfo": {
                      "grouptext": "Pistols",
                      "dicepool": "10dicepool [4]",
                      "damagetext": "9P(f)",
                      "damagevalue": "9",
                      "damagetype": "Physical",
                      "ap": "4",
                      "modestext": "SA/BF",
                      "isammunition": "0",
                      "recoilcomp": "2",
                      "equipped": "Main Hand",
                      "ammunitionused": {
                         "text": "30 (c)",
                         "count": "30",
                         "bins": "1"
                      },
                      "mode": [
                         "Semi-Automatic",
                         "Burst Fire"
                      ],
                      "ranges": {
                         "text": "5/20/40/60",
                         "range": [
                            {
                               "name": "Minimum",
                               "text": "0m",
                               "value": "0"
                            },
                            {
                               "name": "Short",
                               "text": "5m",
                               "value": "5"
                            },
                            {
                               "name": "Medium",
                               "text": "20m",
                               "value": "20"
                            },
                            {
                               "name": "Long",
                               "text": "40m",
                               "value": "40"
                            },
                            {
                               "name": "Extreme",
                               "text": "60m",
                               "value": "60"
                            }
                         ]
                      }
                   },
                   "modifications": {
                      "item": {
                         "name": "Silencer/Suppressor",
                         "useradded": "no",
                         "quantity": "1",
                         "size": "Human/Elf/Ork Size",
                         "wireless": "Present",
                         "description": "This barrel-mounted accessory reduces the sound and flash of a weapon's discharge. It cannot be used with revolvers or shotguns. It applies a -4 dice pool modifier on all Perception Tests to notice the weapon's use or locate the weapon's firer. Attaching or removing a silencer takes a Complex Action.",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ],
                         "modifications": [],
                         "accessories": [],
                         "ammunition": [],
                         "programs": [],
                         "othergear": []
                      }
                   },
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Combat Knife",
                   "quantity": "1",
                   "size": "Human/Elf/Ork Size",
                   "wireless": "Present",
                   "description": "A long, KA-BAR-style fighting knife with a blacked-out blade and a chisel point for punching through armor.",
                   "gearcost": {
                      "text": "300¥",
                      "value": "300"
                   },
                   "availability": {
                      "text": "4",
                      "value": "4"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "weaponinfo": {
                      "grouptext": "Blades",
                      "dicepool": "7dicepool [6]",
                      "damagetext": "5P",
                      "damagevalue": "5",
                      "damagetype": "Physical",
                      "ap": "-3",
                      "modestext": "",
                      "isammunition": "0",
                      "reach": "",
                      "equipped": "Main Hand",
                      "defense": {
                         "name": "Combat Knife Parry",
                         "normal": "2"
                      }
                   },
                   "modifications": [],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Survival Knife",
                   "quantity": "1",
                   "size": "Human/Elf/Ork Size",
                   "wireless": "Present",
                   "description": "A fine quality blade - smooth on one edge, serrated on the other - with several accessories, including a GPS monitor, mini-multitool, micro-lighter, and a hidden compartment in the handle. The sides of the steel are coated with a non-toxic chemical that blacks out the blade when inert to prevent unwanted reflection, but can be activated to provide two hours of phosphorescent light. All knives can cut flesh, but a survival knife is better at cutting rope and wood, or otherwise being used as a tool. The survival knife is the kind of gadget that no professional should be without.",
                   "gearcost": {
                      "text": "100¥",
                      "value": "100"
                   },
                   "availability": {
                      "text": "",
                      "value": "0"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "weaponinfo": {
                      "grouptext": "Blades",
                      "dicepool": "7dicepool [5]",
                      "damagetext": "5P",
                      "damagevalue": "5",
                      "damagetype": "Physical",
                      "ap": "-1",
                      "modestext": "",
                      "isammunition": "0",
                      "reach": "",
                      "equipped": "Main Hand",
                      "defense": {
                         "name": "Survival Knife Parry",
                         "normal": "2"
                      }
                   },
                   "modifications": [],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Throwing Knife",
                   "quantity": "15",
                   "size": "Human/Elf/Ork Size",
                   "wireless": "Present",
                   "description": "A wide variety of shapes and sizes of aerodynamically balanced, specially weighted, muscle-powered throwing weapons are available, from throwing spikes to darts to kunai and shuriken. A character can ready (Agility ÷ 2) of these knives with one Ready Weapon action.",
                   "gearcost": {
                      "text": "25¥",
                      "value": "25"
                   },
                   "availability": {
                      "text": "4R",
                      "value": "4"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "weaponinfo": {
                      "grouptext": "Throwing Weapons",
                      "dicepool": "4dicepool [5]",
                      "damagetext": "4P",
                      "damagevalue": "4",
                      "damagetype": "Physical",
                      "ap": "-1",
                      "modestext": "",
                      "isammunition": "0",
                      "recoilcomp": "2",
                      "equipped": "Main Hand",
                      "ranges": {
                         "text": "3/6/9/15",
                         "range": [
                            {
                               "name": "Minimum",
                               "text": "0m",
                               "value": "0"
                            },
                            {
                               "name": "Short",
                               "text": "3m",
                               "value": "3"
                            },
                            {
                               "name": "Medium",
                               "text": "6m",
                               "value": "6"
                            },
                            {
                               "name": "Long",
                               "text": "9m",
                               "value": "9"
                            },
                            {
                               "name": "Extreme",
                               "text": "15m",
                               "value": "15"
                            }
                         ]
                      }
                   },
                   "modifications": [],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Unarmed Strike",
                   "useradded": "no",
                   "quantity": "1",
                   "natural": "yes",
                   "description": [],
                   "gearcost": {
                      "text": "0¥",
                      "value": "0"
                   },
                   "availability": {
                      "text": "",
                      "value": "0"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "weaponinfo": {
                      "grouptext": "Unarmed",
                      "dicepool": "4dicepool [5]",
                      "damagetext": "3P",
                      "damagevalue": "3",
                      "damagetype": "Physical",
                      "ap": "0",
                      "modestext": "",
                      "isammunition": "0",
                      "reach": "",
                      "equipped": "Main Hand",
                      "defense": {
                         "name": "Unarmed Strike Parry",
                         "normal": "0"
                      }
                   }
                }
             ],
             "armor": [
                {
                   "name": "Chameleon Suit",
                   "quantity": "1",
                   "wireless": "Present",
                   "description": "This full-body suit has a smart ruthenium polymer coating supported by a sensor suite; the technology allows it to scan its surroundings and replicate the images at the proper perspectives. Add 2 to your limit when you make Sneaking tests to hide. A chameleon suit is also armored for the wearer's protection.",
                   "gearcost": {
                      "text": "1,700¥",
                      "value": "1700"
                   },
                   "availability": {
                      "text": "10R",
                      "value": "10"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "armorinfo": {
                      "rating": "9",
                      "acid": "0",
                      "cold": "0",
                      "electricity": "0",
                      "falling": "0",
                      "fire": "0",
                      "radiation": "0",
                      "laser": "0",
                      "equipped": "yes"
                   },
                   "modifications": [],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Cyber Arm (Synthetic)",
                   "essencecost": "1",
                   "quantity": "1",
                   "wireless": "Present",
                   "description": "In today's world of transplant-friendly bioware, the use of cyberlimbs is sometimes viewed as crude and outdated. On the other hand, they are cheap and easy to service and upgrade, so in the end they became even more popular for the less fortunate. Since cyberlimbs are more capable than most natural limbs, and you can load them up with all sorts of wiz tech, this kind of cyberware has stayed in high demand.\n\nCyberskulls and - torsos are included in the \"cyberlimbs\" category, though they are in fact shells rather than full replacements (or actual limbs).\n\nCyberlimbs have their own Strength and Agility ratings. When a particular limb is used for a test (such as leading an attack with your cyberarm), use the attribute for that limb (natural or cyber); in any other case, take the average value of all limbs involved in the task. If a task requires the careful coordination of several limbs, use the value of the weakest limb. The attributes of partial limbs (including cyberhands and - feet) may be enhanced, but their attributes only apply for tests directly involving those limbs (such as a Strength Test when gripping something with an enhanced cyberhand). Cyberlimbs cannot hold any bioware, nor any cyber-implants that take up Essence rather than Capacity. Essence cost, Capacity, and other stats can be found on the Cyberlimb table.\n\nCyberlimbs have other useful features. They give you 1 extra damage box on your Physical Condition Monitor for each cyberlimb you possess (ignore hands and feet, and partial limbs count for half a limb). They have Capacity, letting you add cyberweapons and other cyber systems that have a Capacity cost {in brackets}. They can perform at superhuman levels with the right enhancements. Cyberlimbs can be dangerous even if they don't have cyberweapons installed - their unarmed Damage Value is (STR)P.\n\nCyberlimbs: These prosthetics are basic off-the-shelf models. All standard cyberlimbs come with Strength and Agility attributes of 3. These values can only be augmented by cyberlimb enhancements, not other augmentations.\n\nCustomization: You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.\n\nCyberlimbs may be either obvious or synthetic.\n\nObvious cyberlimbs: These implants are immediately recognizable as artificial limbs unless you cover them with clothing. They are often chromed or matte colors but visibly mechanical in nature. Some folks like them glaringly obvious and outlandish, some find the artificiality repellant and disturbing. This can affect your social dealings in some circles, especially upper-crust society and the purist crowd.\n\nSynthetic cyberlimbs: Synthetic limbs are disguised as natural limbs. The fact that they're cybernetic gives them a -8 Concealability (the Cybertechnology skill may replace Perception for this test) when someone's just looking, but synthetic limbs are obviously artificial to the touch.",
                   "gearcost": {
                      "text": "20,000¥",
                      "value": "20000"
                   },
                   "availability": {
                      "text": "4",
                      "value": "4"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "armorinfo": {
                      "rating": "+0",
                      "acid": "0",
                      "cold": "0",
                      "electricity": "0",
                      "falling": "0",
                      "fire": "0",
                      "radiation": "0",
                      "laser": "0",
                      "equipped": "yes"
                   },
                   "modifications": [
                      {
                         "name": "Cyberlimb Agility",
                         "rating": "3",
                         "useradded": "no",
                         "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ]
                      },
                      {
                         "name": "Cyberlimb Strength",
                         "rating": "3",
                         "useradded": "no",
                         "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ]
                      }
                   ],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Cyber Leg (Synthetic)",
                   "essencecost": "1",
                   "quantity": "1",
                   "wireless": "Present",
                   "description": "In today's world of transplant-friendly bioware, the use of cyberlimbs is sometimes viewed as crude and outdated. On the other hand, they are cheap and easy to service and upgrade, so in the end they became even more popular for the less fortunate. Since cyberlimbs are more capable than most natural limbs, and you can load them up with all sorts of wiz tech, this kind of cyberware has stayed in high demand.\n\nCyberskulls and - torsos are included in the \"cyberlimbs\" category, though they are in fact shells rather than full replacements (or actual limbs).\n\nCyberlimbs have their own Strength and Agility ratings. When a particular limb is used for a test (such as leading an attack with your cyberarm), use the attribute for that limb (natural or cyber); in any other case, take the average value of all limbs involved in the task. If a task requires the careful coordination of several limbs, use the value of the weakest limb. The attributes of partial limbs (including cyberhands and - feet) may be enhanced, but their attributes only apply for tests directly involving those limbs (such as a Strength Test when gripping something with an enhanced cyberhand). Cyberlimbs cannot hold any bioware, nor any cyber-implants that take up Essence rather than Capacity. Essence cost, Capacity, and other stats can be found on the Cyberlimb table.\n\nCyberlimbs have other useful features. They give you 1 extra damage box on your Physical Condition Monitor for each cyberlimb you possess (ignore hands and feet, and partial limbs count for half a limb). They have Capacity, letting you add cyberweapons and other cyber systems that have a Capacity cost {in brackets}. They can perform at superhuman levels with the right enhancements. Cyberlimbs can be dangerous even if they don't have cyberweapons installed - their unarmed Damage Value is (STR)P.\n\nCyberlimbs: These prosthetics are basic off-the-shelf models. All standard cyberlimbs come with Strength and Agility attributes of 3. These values can only be augmented by cyberlimb enhancements, not other augmentations.\n\nCustomization: You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.\n\nCyberlimbs may be either obvious or synthetic.\n\nObvious cyberlimbs: These implants are immediately recognizable as artificial limbs unless you cover them with clothing. They are often chromed or matte colors but visibly mechanical in nature. Some folks like them glaringly obvious and outlandish, some find the artificiality repellant and disturbing. This can affect your social dealings in some circles, especially upper-crust society and the purist crowd.\n\nSynthetic cyberlimbs: Synthetic limbs are disguised as natural limbs. The fact that they're cybernetic gives them a -8 Concealability (the Cybertechnology skill may replace Perception for this test) when someone's just looking, but synthetic limbs are obviously artificial to the touch.",
                   "gearcost": {
                      "text": "20,000¥",
                      "value": "20000"
                   },
                   "availability": {
                      "text": "4",
                      "value": "4"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "armorinfo": {
                      "rating": "+0",
                      "acid": "0",
                      "cold": "0",
                      "electricity": "0",
                      "falling": "0",
                      "fire": "0",
                      "radiation": "0",
                      "laser": "0",
                      "equipped": "yes"
                   },
                   "modifications": [
                      {
                         "name": "Cyberlimb Agility",
                         "rating": "3",
                         "useradded": "no",
                         "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ]
                      },
                      {
                         "name": "Cyberlimb Strength",
                         "rating": "3",
                         "useradded": "no",
                         "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ]
                      }
                   ],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Cyber Lower Leg (Synthetic)",
                   "essencecost": "0.45",
                   "quantity": "1",
                   "wireless": "Present",
                   "description": "In today's world of transplant-friendly bioware, the use of cyberlimbs is sometimes viewed as crude and outdated. On the other hand, they are cheap and easy to service and upgrade, so in the end they became even more popular for the less fortunate. Since cyberlimbs are more capable than most natural limbs, and you can load them up with all sorts of wiz tech, this kind of cyberware has stayed in high demand.\n\nCyberskulls and - torsos are included in the \"cyberlimbs\" category, though they are in fact shells rather than full replacements (or actual limbs).\n\nCyberlimbs have their own Strength and Agility ratings. When a particular limb is used for a test (such as leading an attack with your cyberarm), use the attribute for that limb (natural or cyber); in any other case, take the average value of all limbs involved in the task. If a task requires the careful coordination of several limbs, use the value of the weakest limb. The attributes of partial limbs (including cyberhands and - feet) may be enhanced, but their attributes only apply for tests directly involving those limbs (such as a Strength Test when gripping something with an enhanced cyberhand). Cyberlimbs cannot hold any bioware, nor any cyber-implants that take up Essence rather than Capacity. Essence cost, Capacity, and other stats can be found on the Cyberlimb table.\n\nCyberlimbs have other useful features. They give you 1 extra damage box on your Physical Condition Monitor for each cyberlimb you possess (ignore hands and feet, and partial limbs count for half a limb). They have Capacity, letting you add cyberweapons and other cyber systems that have a Capacity cost {in brackets}. They can perform at superhuman levels with the right enhancements. Cyberlimbs can be dangerous even if they don't have cyberweapons installed - their unarmed Damage Value is (STR)P.\n\nCyberlimbs: These prosthetics are basic off-the-shelf models. All standard cyberlimbs come with Strength and Agility attributes of 3. These values can only be augmented by cyberlimb enhancements, not other augmentations.\n\nCustomization: You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.\n\nCyberlimbs may be either obvious or synthetic.\n\nObvious cyberlimbs: These implants are immediately recognizable as artificial limbs unless you cover them with clothing. They are often chromed or matte colors but visibly mechanical in nature. Some folks like them glaringly obvious and outlandish, some find the artificiality repellant and disturbing. This can affect your social dealings in some circles, especially upper-crust society and the purist crowd.\n\nSynthetic cyberlimbs: Synthetic limbs are disguised as natural limbs. The fact that they're cybernetic gives them a -8 Concealability (the Cybertechnology skill may replace Perception for this test) when someone's just looking, but synthetic limbs are obviously artificial to the touch.",
                   "gearcost": {
                      "text": "12,000¥",
                      "value": "12000"
                   },
                   "availability": {
                      "text": "4",
                      "value": "4"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "armorinfo": {
                      "rating": "+0",
                      "acid": "0",
                      "cold": "0",
                      "electricity": "0",
                      "falling": "0",
                      "fire": "0",
                      "radiation": "0",
                      "laser": "0",
                      "equipped": "yes"
                   },
                   "modifications": [
                      {
                         "name": "Cyberlimb Agility",
                         "rating": "3",
                         "useradded": "no",
                         "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ]
                      },
                      {
                         "name": "Cyberlimb Strength",
                         "rating": "3",
                         "useradded": "no",
                         "description": "You can have your cyberlimb tailored and customized to your frame and musculature. Customization lets you add to your limb's base Strength and/or Agility ratings. Each increase of either attribute increases the limb's Availability and cost. If either of your limb's attributes are increased beyond your natural maximum for that attribute, you can't use the cyberlimb (so don't overdo it), but you can still add cyberlimb enhancements. You customize your cyberlimb when you buy it; you can't customize it after purchase, but you can add enhancements.",
                         "gearcost": {
                            "text": "0¥",
                            "value": "0"
                         },
                         "availability": {
                            "text": "",
                            "value": "0"
                         },
                         "matrix": [
                            {
                               "name": "Attack",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Sleaze",
                               "text": "0",
                               "base": "0",
                               "modified": "0"
                            },
                            {
                               "name": "Data Processing",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            },
                            {
                               "name": "Firewall",
                               "text": "2",
                               "base": "2",
                               "modified": "2"
                            }
                         ]
                      }
                   ],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Gas Mask",
                   "quantity": "1",
                   "wireless": "Present",
                   "description": "This air-supplied re-breather completely covers your face and gives you immunity to inhalation- vector toxin attacks (Toxins, Drugs, and BTLs, p. 408). It comes with a one-hour clean-air supply (replacements cost 40 nuyen) and can be attached to larger air tanks. It cannot be combined with a regular respirator.",
                   "gearcost": {
                      "text": "200¥",
                      "value": "200"
                   },
                   "availability": {
                      "text": "",
                      "value": "0"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "armorinfo": {
                      "rating": "+0",
                      "acid": "0",
                      "cold": "0",
                      "electricity": "0",
                      "falling": "0",
                      "fire": "0",
                      "radiation": "0",
                      "laser": "0"
                   },
                   "modifications": [],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Respirator",
                   "rating": "1",
                   "quantity": "1",
                   "wireless": "Present",
                   "description": "A respirator is a filter-mask worn over the mouth and nose that protects against inhalation-vector toxins (Toxins, Drugs, and BTLs, p. 408). The respirator adds its rating to toxin resistance tests against inhalation-vector toxins.",
                   "gearcost": {
                      "text": "50¥",
                      "value": "50"
                   },
                   "availability": {
                      "text": "",
                      "value": "0"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "armorinfo": {
                      "rating": "+0",
                      "acid": "0",
                      "cold": "0",
                      "electricity": "0",
                      "falling": "0",
                      "fire": "0",
                      "radiation": "0",
                      "laser": "0"
                   },
                   "modifications": [],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                }
             ],
             "equipment": [
                {
                   "name": "Personafix Chip",
                   "quantity": "1",
                   "size": "Human/Elf/Ork Size",
                   "wireless": "Present",
                   "description": "Personafix chips, also called p-fixes, are the strangest and most dangerous BTLs. A combination of simsense and skillsoft technology modifies the basic personality of the user, installing the mnemonic routines of certain behavior patterns. While under the chip's influence, the user becomes a different person. Popular chips are based off of historical figures or pop culture icons. \"Workers\" in bunraku (\"puppet\") sex parlors are fitted with personafix BTLs, sometimes combined with data filter cyberware to protect a client's anonymity. The RAS override feature is frequently disabled so that users can move around freely under the influence of the chip.",
                   "gearcost": {
                      "text": "200¥",
                      "value": "200"
                   },
                   "availability": {
                      "text": "4F",
                      "value": "4"
                   },
                   "matrix": [
                      {
                         "name": "Attack",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Sleaze",
                         "text": "0",
                         "base": "0",
                         "modified": "0"
                      },
                      {
                         "name": "Data Processing",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      },
                      {
                         "name": "Firewall",
                         "text": "2",
                         "base": "2",
                         "modified": "2"
                      }
                   ],
                   "modifications": [],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                },
                {
                   "name": "Personafix Download",
                   "dicepool": "0",
                   "quantity": "1",
                   "description": "Personafix chips, also called p-fixes, are the strangest and most dangerous BTLs. A combination of simsense and skillsoft technology modifies the basic personality of the user, installing the mnemonic routines of certain behavior patterns. While under the chip's influence, the user becomes a different person. Popular chips are based off of historical figures or pop culture icons. \"Workers\" in bunraku (\"puppet\") sex parlors are fitted with personafix BTLs, sometimes combined with data filter cyberware to protect a client's anonymity. The RAS override feature is frequently disabled so that users can move around freely under the influence of the chip.",
                   "gearcost": {
                      "text": "200¥",
                      "value": "200"
                   },
                   "availability": {
                      "text": "4F",
                      "value": "4"
                   },
                   "modifications": [],
                   "accessories": [],
                   "ammunition": [],
                   "programs": [],
                   "othergear": []
                }
             ]
          },
          "identities": {
             "identity": {
                "name": "Hitman",
                "lifestyle": {
                   "name": "High Lifestyle",
                   "months": "1",
                   "gearcost": {
                      "text": "10,000¥/y",
                      "value": "10000"
                   }
                },
                "subscription": {
                   "name": "DocWagon Platinum Contract",
                   "months": "12",
                   "gearcost": {
                      "text": "0¥",
                      "value": "0"
                   }
                },
                "license": {
                   "name": "Fake SIN",
                   "rating": "3",
                   "gearcost": {
                      "text": "7,500¥",
                      "value": "7500"
                   }
                },
                "description": []
             }
          },
          "contacts": {
             "contact": {
                "name": "Mafia Consigliere",
                "connection": "3",
                "loyalty": "3",
                "description": "Metatype: Human\nSex: Male\nAge: Young\nPreferred Payment Method: Service (drek job)\nHobbies/Vice: Nothing of Interest\nPersonal Life: Single\nType: Personal Favor"
             }
          },
          "ammotrackers": [
             {
                "name": "Ares Light Fire 75",
                "text": "unloaded"
             },
             {
                "name": "Ares Viper Slivergun",
                "text": "unloaded"
             },
             {
                "name": "Ares Viper Slivergun",
                "text": "unloaded"
             }
          ],
          "trackers": [
             {
                "name": "Cumulative Recoil",
                "text": "0",
                "used": "0",
                "left": "0",
                "min": "0",
                "max": "0"
             },
             {
                "name": "Edge Pool",
                "text": "0/7",
                "used": "0",
                "left": "7",
                "min": "0",
                "max": "7"
             },
             {
                "name": "Movement This Turn (Currently: Stationary)",
                "text": "0m",
                "used": "0",
                "left": "0",
                "min": "0",
                "max": "0"
             }
          ],
          "conditionmonitors": {
             "totalpenalty": "0",
             "conditionmonitor": [
                {
                   "name": "Physical Damage Track",
                   "boxes": "12",
                   "penalty": "0"
                },
                {
                   "name": "Stun Damage Track",
                   "boxes": "10",
                   "penalty": "0"
                }
             ]
          },
          "journals": {
             "journal": {
                "name": "Title",
                "gamedate": "0",
                "realdate": "20181223",
                "karma": "0",
                "cash": "0",
                "streetcred": "0",
                "notoriety": "0",
                "awareness": "0",
                "description": []
             }
          },
          "images": [],
          "validation": {
             "report": []
          },
          "settings": {
             "summary": "Character Creation Systems: Established Runners; Optional Rules -> Chrome Flesh Optional Rules: Use Essence Holes; Output Options: Include Vehicle Statblocks on Sheet"
          },
          "minions": []
       }
    }
 };  
 

 getCharacter(){
     return this.data;
 }

 getCharacterPortraits(){
   return this.characterPortraits;
}

 getPhysicalDamageTrack(){
    return this.physicalDamageTrack;
 }

 getStunDamageTrack(){
   return this.stunDamageTrack;
 }
}
