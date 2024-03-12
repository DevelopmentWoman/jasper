import { DetailServices } from "../components/DetailServices"
import { MainPhoto } from "../components/MainPhoto"
import { Items } from "../components/Items"


const initUrl = "../src/assets/"
const linkImgHome=[
  {id:1, url: `${initUrl}truck1_black.webp`, subtitle: 'CONCRETE PAVING', subtitle2: 'FLATWORK', charact:[
    "City Streets and Streetscapes","Recreational Trails","Bridge Approaches","Parking Lots","Curb and Gutter","Sidewalks","Driveways","ADA Ramps",
    "Pavement Removals", "Sawing and Joint Sealing"], urlPhoto:`${initUrl}/services/1.webp`
  },
  {id:2, url: `${initUrl}bridge_black.svg`, subtitle: 'BRIDGE REHABILITATION', subtitle2:'& structures', charact:["High Performance Concrete Bridge Deck Overlays",

   "Polymer Concrete Bridge Deck Overlays", "Bridge Deck and Structure Patching", "Expansion Joint Repairs", "Structural Concrete", "Intakes and Manholes",
   "Precast and Cast-in-Place Box Culverts”","Bridge Deck Replacements", "Specialty Coatings", "Epoxy Crack Injecting","Bridge Cleaning", "Emergency Repairs"
  ],urlPhoto:`${initUrl}/services/2.webp`},

  {id:3, url: `${initUrl}tub_black.webp`, subtitle: 'UNDERGROUND UTILITIES.', subtitle2:'SITEWORK, & BOX CULVERTS', charact:["Sanitary Sewer Storm Sewer and Water Main",
    "Site Grading", "Excavation", "Precast and Cast-in-Place Box Culvers", "Intakes and Manholes", "Site Surveying", "Rip Rap Installation", "Subgrade Treatment",
    "Erosion Control and Seeding","Tree Clearing and Grubbing"], urlPhoto:`${initUrl}/services/3.webp`},
  {id:4, url: `${initUrl}truck2_black.webp`, subtitle: 'TRUCKING & AGGREGATE', subtitle2: 'SALES', charact:[
    "Material Hauling","Heavy Equipment Hauling","Topsoil and Fill Dirt","Limestone/Driveway Gravel,Sand","Decorative Landscaping Rock",
    "River Rock","Crushed Concrete","Rip Rap","Landscaping Boulders"
  ],urlPhoto:`${initUrl}/services/4.webp`},
  {id:5, url: `${initUrl}truck3_black.webp`, subtitle: 'EQUIPMENT RENTAL &', subtitle2: 'SUPPLIES', charact:[
   "Snooper Truck Rental with Operator", "Other Bridge Inspection Rental Units", "Skidloaders","Concrete Buggies and Portable Mixers",
    "Yard Maintenance Equipment", "Enclosed and Flat Deck Trailers", "Concrete Finishing Tools", "Concrete Accessories", "General Construction Supplies"
  ],urlPhoto:`${initUrl}/services/5.webp`},
]


const initUrlx = "../src/assets/"
const linkImgHomex=[
  {id:1, url: `${initUrlx}truck1_black.webp`, subtitle: `CONCRETE PAVING & FLATWORK`},
  {id:2, url: `${initUrlx}bridge_black.svg`, subtitle: 'BRIDGE REHABILITATION'},
  {id:3, url: `${initUrlx}tub_black.webp`, subtitle: 'UNDERGROUND UTILITIES. SITEWORK, & BOX CULVERTS'},
  {id:4, url: `${initUrlx}truck2_black.webp`, subtitle: 'TRUCKING & AGGREGATE SALES'},
  {id:5, url: `${initUrlx}truck3_black.webp`, subtitle: 'EQUIPMENT RENTAL & SUPPLIES'},
]


export const Services = () => {
  return (
    <>

      <MainPhoto classAbout= "card-img-ser animate__animated animate__fadeIn" imgSrc="../src/assets/SERVICES_OUR_COMPANY.webp"/>

      <main className="animate__animated animate__fadeIn">

        <section className="items-serv">
          <Items linkImgHome={linkImgHomex}/>
        </section>
        <section className="detaill">
          <DetailServices linkImgHome={linkImgHome}/>
        </section>
      </main>
    </>
  )
}


