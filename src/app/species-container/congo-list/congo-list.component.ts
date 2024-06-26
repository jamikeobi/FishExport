import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FishService } from 'src/app/Services/fish.service';

@Component({
  selector: 'app-congo-list',
  templateUrl: './congo-list.component.html',
  styleUrls: ['./congo-list.component.css']
})
export class CongoListComponent {
  searchText: string = '';

  fishSpecies = [
    { code: '001', commonName: 'African Butterflyfish', scientificName: 'Pantodon buchholzi', size: '3 inches', backpack: 5 },
    { code: '002', commonName: 'Albino Tiger Barb', scientificName: 'Puntigrus tetrazona', size: '2 inches', backpack: 10 },
    { code: '003', commonName: 'Angelfish', scientificName: 'Pterophyllum spp.', size: '6 inches', backpack: 5 },
    { code: '004', commonName: 'Archerfish', scientificName: 'Toxotes spp.', size: '8 inches', backpack: 10 },
    { code: '005', commonName: 'Asian Arowana', scientificName: 'Scleropages formosus', size: '24 inches', backpack: 1 },
    { code: '006', commonName: 'Betta Fish', scientificName: 'Betta splendens', size: '2.5 inches', backpack: 10 },
    { code: '007', commonName: 'Black Ghost Knifefish', scientificName: 'Apteronotus albifrons', size: '20 inches', backpack: 1 },
    { code: '008', commonName: 'Black Molly', scientificName: 'Poecilia sphenops', size: '3 inches', backpack: 20 },
    { code: '009', commonName: 'Black Skirt Tetra', scientificName: 'Gymnocorymbus ternetzi', size: '2 inches', backpack: 15 },
    { code: '010', commonName: 'Black Tetra', scientificName: 'Gymnocorymbus ternetzi', size: '2 inches', backpack: 20 },
    { code: '011', commonName: 'Blue Gourami', scientificName: 'Trichogaster trichopterus', size: '4 inches', backpack: 5 },
    { code: '012', commonName: "Boeseman's Rainbowfish", scientificName: 'Melanotaenia boesemani', size: '3 inches', backpack: 10 },
    { code: '013', commonName: 'Bolivian Ram', scientificName: 'Mikrogeophagus altispinosus', size: '3 inches', backpack: 5 },
    { code: '014', commonName: 'Bristlenose Pleco', scientificName: 'Ancistrus spp.', size: '4 inches', backpack: 10 },
    { code: '015', commonName: 'Cardinal Tetra', scientificName: 'Paracheirodon axelrodi', size: '1.5 inches', backpack: 20 },
    { code: '016', commonName: 'Celestial Pearl Danio', scientificName: 'Danio margaritatus', size: '0.75 inches', backpack: 20 },
    { code: '017', commonName: 'Clown Loach', scientificName: 'Chromobotia macracanthus', size: '12 inches', backpack: 1 },
    { code: '018', commonName: 'Congo Tetra', scientificName: 'Phenacogrammus interruptus', size: '3 inches', backpack: 10 },
    { code: '019', commonName: 'Corydoras Catfish', scientificName: 'Corydoras spp.', size: '2.5 inches', backpack: 15 },
    { code: '020', commonName: 'Dwarf Gourami', scientificName: 'Trichogaster lalius', size: '2 inches', backpack: 10 },
    // Continue adding more fish species up to 100
    { code: '021', commonName: 'Electric Blue Ram', scientificName: 'Mikrogeophagus ramirezi', size: '2 inches', backpack: 5 },
    { code: '022', commonName: 'Electric Yellow Cichlid', scientificName: 'Labidochromis caeruleus', size: '4 inches', backpack: 5 },
    { code: '023', commonName: 'Endler\'s Livebearer', scientificName: 'Poecilia wingei', size: '1.5 inches', backpack: 20 },
    { code: '024', commonName: 'Fancy Guppy', scientificName: 'Poecilia reticulata', size: '2 inches', backpack: 20 },
    { code: '025', commonName: 'Firemouth Cichlid', scientificName: 'Thorichthys meeki', size: '6 inches', backpack: 5 },
    { code: '026', commonName: 'Flame Tetra', scientificName: 'Hyphessobrycon flammeus', size: '2 inches', backpack: 9}

  ];



  fishData$!: Observable<any[]>;

  constructor(private fishService: FishService) { }

  ngOnInit(): void {
    this.fishData$ = this.fishService.getFishData(); // This will get filtered data from the service
  }
  
}
