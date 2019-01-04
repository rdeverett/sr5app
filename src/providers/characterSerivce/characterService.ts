import { Injectable } from '@angular/core';

export class CharacterService{
    private character = {
        "characterPortrait": {
            // Elf 
            "shadowrunElfFemaleBlondeShortHair": "../assets/imgs/elves/shadowrunElfFemaleBlondeShortHair.jpg",
            "shadowrunElfFemaleBurnetteHair": "../assets/imgs/elves/shadowrunElfFemaleBurnetteHair.jpg",
            "shadowrunElfFemaleGreenShortHair": "../assets/imgs/elves/shadowrunElfFemaleGreenShortHair.jpg",
            "shadowrunElfMaleBlackLongHair": "../assets/imgs/elves/shadowrunElfMaleBlackLongHair.jpg",
            "shadowrunElfMaleLongBurnetteHair": "../assets/imgs/elves/shadowrunElfMaleLongBurnetteHair.jpg",
            "shadowrunElfMaleShortWhiteHair": "../assets/imgs/elves/shadowrunElfMaleShortWhiteHair.jpg",
            //Human
            "shadowrunHumanBlackShortHair": "../assets/imgs/humans/shadowrunHumanBlackShortHair.jpg",
            "shadowrunHumanFemaleBurnetteHair": "../assets/imgs/humans/shadowrunHumanFemaleBurnetteHair.jpg",
            "shadowrunHumanFemaleLongBlondeHair": "../assets/imgs/humans/shadowrunHumanFemaleLongBlondeHair.jpg",
            "shadowrunHumanMaleBlackHair": "../assets/imgs/humans/shadowrunHumanMaleBlackHair.jpg",
            "shadowrunHumanMaleBlondeHair": "../assets/imgs/humans/shadowrunHumanMaleBlondeHair.jpg",
            "shadowrunHumanMaleShavedHair": "../assets/imgs/humans/shadowrunHumanMaleShavedHead.jpg",
            //Ork
            "shadowrunOrkFemaleBurnetteHair": "../assets/imgs/orks/shadowrunOrkFemaleBurnetteHair.jpg",
            "shadowrunOrkFemaleRedShortHair": "../assets/imgs/orks/shadowrunOrkFemaleRedShortHair.jpg",
            "shadowrunOrkFemaleShortBlondeHair": "../assets/imgs/orks/shadowrunOrkFemaleShortBlondeHair.jpg",
            "shadowrunOrkMaleBlackBraidedHair": "../assets/imgs/orks/shadowrunOrkMaleBlackBraidedHair.jpg",
            "shadowrunOrkMaleShortBlackHair": "../assets/imgs/orks/shadowrunOrkMaleShortBlackHair.jpg",
            "shadowrunOrkMaleShortBlondeHair": "../assets/imgs/orks/shadowrunOrkMaleShortBlondeHair.jpg"
        }
    }

    getCharacterPortrait(){
        return this.character;
    }
}