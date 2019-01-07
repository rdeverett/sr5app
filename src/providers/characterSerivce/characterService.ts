import { Injectable } from '@angular/core';

export class CharacterService{

    private characterPortrait = ['../assets/imgs/elves/shadowrunElfFemaleBlondeShortHair.jpg', '../assets/imgs/elves/shadowrunElfFemaleBurnetteHair.jpg',
    "../assets/imgs/elves/shadowrunElfFemaleGreenShortHair.jpg", "../assets/imgs/elves/shadowrunElfMaleBlackLongHair.jpg",
    "../assets/imgs/elves/shadowrunElfMaleLongBurnetteHair.jpg", "../assets/imgs/elves/shadowrunElfMaleShortWhiteHair.jpg",
    "../assets/imgs/humans/shadowrunHumanBlackShortHair.jpg", "../assets/imgs/humans/shadowrunHumanFemaleBurnetteHair.jpg",
    "../assets/imgs/humans/shadowrunHumanFemaleLongBlondeHair.jpg", "../assets/imgs/humans/shadowrunHumanMaleBlackHair.jpg", 
    "../assets/imgs/humans/shadowrunHumanMaleBlondeHair.jpg", "../assets/imgs/humans/shadowrunHumanMaleShavedHead.jpg",
    "../assets/imgs/orks/shadowrunOrkFemaleBurnetteHair.jpg", "../assets/imgs/orks/shadowrunOrkFemaleRedShortHair.jpg",
    "../assets/imgs/orks/shadowrunOrkFemaleShortBlondeHair.jpg", "../assets/imgs/orks/shadowrunOrkMaleBlackBraidedHair.jpg",
    "../assets/imgs/orks/shadowrunOrkMaleShortBlackHair.jpg", "../assets/imgs/orks/shadowrunOrkMaleShortBlondeHair.jpg"];

    getCharacterPortrait(){
        return this.characterPortrait;
    }
}