/*

 @Author: 13156876
 @Course: Geovisualisation and WebGIS
 @Subject: Assignment - Part B
 @File type: JavaScript that contains data in GeoJSON format
 
*/

// Define the layer with the theatres
var theatres = {
  "type": "FeatureCollection",
  "features": [
        {
            "type": "Feature",
            "properties": {
						"fill": "#FF1493",
				        "name":"Lyric Theatre",
				        "show":"Thriller",
						"id":"1",
						"postcode":"W1D 7ES",
				        "address":"29 Shaftesbury Av",
				        "tickets":"http://inspireddiversions.com/eventsearchresults.cfm?EventID=1639&city=London",
                        "popupContent": "Lyric Theatre"
            },
            "geometry": {
                        "type": "Point",
                        "coordinates": [-0.133562, 51.511293]
            }
        },
		{
            "type": "Feature",
            "properties": {
				        "name":"Phoenix Theatre",
				        "show":"Come from away",
						"id":"2",
						"postcode":"WC2H 0JP",
				        "address":"Charing Cross Rd",
				        "tickets":"https://phoenix.londontheatres.co.uk/tickets/",
                        "popupContent": "Phoenix Theatre"
            },
            "geometry": {
                        "type": "Point",
                        "coordinates": [-0.129568, 51.514514]
            }
        },
		{
            "type": "Feature",
            "properties": {
				        "name":"Cambridge Theatre",
				        "show":"Matilda",
						"id":"3",
						"postcode":"WC2H 9HU",
				        "address":"Earlham St",
				        "tickets":"https://www.londontheatredirect.com/venue/5/cambridge-theatre.aspx",
                        "popupContent": "Cambridge Theatre"
            },
            "geometry": {
                        "type": "Point",
                        "coordinates": [-0.126629, 51.513666]
            }
        },
		{
            "type": "Feature",
            "properties": {
				        "name":"Royal Opera House",
				        "show":"Romeo and Juliet",
						"id":"4",
						"postcode":"WC2E 9DD",
				        "address":"Bow St, Covent Garden",
				        "tickets":"https://www.roh.org.uk/productions/romeo-and-juliet-by-kenneth-macmillan",
                        "popupContent": "Royal Opera House"
            },
            "geometry": {
                        "type": "Point",
                        "coordinates": [-0.122199, 51.512932]
            }
        },
		{
            "type": "Feature",
            "properties": {
				        "name":"Theatre Royal Drury Lane",
				        "show":"Frozen",
						"id":"5",
						"postcode":"WC2B 5JF",
				        "address":"Catherine St",
				        "tickets":"https://www.frozenthemusical.co.uk/",
                        "popupContent": "Theatre Royal Drury Lane "
            },
            "geometry": {
                        "type": "Point",
                        "coordinates": [-0.120371, 51.512857]
            }
        },
		{
            "type": "Feature",
            "properties": {
				        "name":"Lyceum Theatre",
				        "show":"The Lion King",
						"id":"6",
						"postcode":"WC2E 7RQ",
				        "address":"21 Wellington St",
				        "tickets":"https://thelionking.co.uk/london/",
                        "popupContent": "Lyceum Theatre"
            },
            "geometry": {
                        "type": "Point",
                        "coordinates": [-0.119988, 51.511598]
            }
        },
		{
            "type": "Feature",
            "properties": {
				        "name":"Savoy Theatre",
				        "show":"9 to 5 the Musical",
						"id":"7",
						"postcode":"WC2R 0ET",
						"address":"Savoy Ct",
						"tickets":"https://www.atgtickets.com/shows/9-to-5-the-musical/savoy-theatre/",
						"popupContent": "Savoy Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.120845, 51.510321]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Adelphi Theatre",
						"show":"Waitress",
						"id":"8",
						"postcode":"WC2R 0NS",
						"address":"Strand",
						"tickets":"https://www.londonboxoffice.co.uk/waitress-tickets",
						"popupContent": "Adelphi Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.122882, 51.510054]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Duke of York's Theatre",
						"show":"Rosmersholm",
						"id":"9",
						"postcode":"WC2N 4BG",
						"address":"St Martin's Ln",
						"tickets":"https://www.atgtickets.com/shows/rosmersholm/duke-of-yorks/",
						"popupContent": "Duke of York's Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.127085, 51.510225]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Noël Coward Theatre",
						"show":"All About Eve",
						"id":"10",
						"postcode":"WC2N 4AP",
						"address":"85-88 St Martin's Ln",
						"tickets":"https://www.timeout.com/london/theatre/all-about-eve-review",
						"popupContent": "Noël Coward Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.127227, 51.511147]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Prince of Wales Theatre",
						"show":"The Book Of Mormon",
						"id":"11",
						"postcode":"W1D 6AS",
						"address":"Coventry St",
						"tickets":"https://seatplan.com/london/prince-of-wales-theatre/tickets/",
						"popupContent": "Prince of Wales Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.132111, 51.510227]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Palace Theatre",
						"show":"Harry Potter and The Cursed Child",
						"id":"12",
						"postcode":"W1D 5AY",
						"address":"113 Shaftesbury Ave",
						"tickets":"https://www.palacetheatrelondon.org/tickets/",
						"popupContent": "Palace Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.129502, 51.513264]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Queen's Theatre",
						"show":"Les Miserables",
						"id":"13",
						"postcode":"W1D 6BA",
						"address":"51 Shaftesbury Ave",
						"tickets":"https://www.londontheatredirect.com/venue/66/queens-theatre.aspx",
						"popupContent": "Queen's Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.132630, 51.511844]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"The Ambassadors Theatre",
						"show":"The Twilight Zone",
						"id":"14",
						"postcode":"WC2H 9ND",
						"address":"West St",
						"tickets":"https://www.theambassadorstheatre.co.uk/Online/default.asp?doWork::WScontent::loadArticle=Load&BOparam::WScontent::loadArticle::article_id=0F63FD1A-BB28-4C52-A93F-8EC066C26BFA&menu_id=6141E362-F94B-4DF9-9A83-5192B2631C08&sToken=1%2Cc8b53712%2C5cb8f98b%2CCB517957-95DE-4B31-99BB-EA71D6D01735%2CH7eDki09NBdZmbxvfVaGxZf07Lo%3D",
						"popupContent": "The Ambassadors Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.127919, 51.512976]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Apollo Theatre",
						"show":"Everybody's talking about Jamie",
						"id":"15",
						"postcode":"W1D 7EZ",
						"address":"Shaftesbury Ave",
						"tickets":"https://www.nimaxtheatres.com/shows/everybodys-talking-about-jamie/",
						"popupContent": "Apollo Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.133378, 51.511427]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Arts Theatre",
						"show":"Six the musical",
						"id":"16",
						"postcode":"WC2H 7JB",
						"address":"6-7 Great Newport St",
						"tickets":"https://artstheatrewestend.co.uk/",
						"popupContent": "Arts Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.127553, 51.511941]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Fortune Theatre",
						"show":"The Woman in Black",
						"id":"17",
						"postcode":"WC2B 5HH",
						"address":"Russell St",
						"tickets":"https://www.atgtickets.com/shows/the-woman-in-black/fortune-theatre/",
						"popupContent": "Fortune Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.120665, 51.513273]
            }
        },
		{
            "type": "Feature",
            "properties": {
						"name":"Duchess Theatre",
						"show":"The play that goes wrong",
						"id":"18",
						"postcode":"WC2B 5LA",
						"address":"3-5 Catherine St",
						"tickets":"https://www.nimaxtheatres.com/shows/the-play-that-goes-wrong/",
						"popupContent": "Duchess Theatre"
            },
            "geometry": {
						"type": "Point",
						"coordinates": [-0.119670, 51.512228]
            }
       }
    ]
};

// Define the layer with the landmarks
var landmarks = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
						"name":"The London Eye",
                        "popupContent": "The London Eye"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-0.119543, 51.503326]
            }
        },
		{
			"type": "Feature",
            "properties": {
						"name":"The Gherkin",
                        "popupContent": "The Gherkin"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-0.080307, 51.514494]
            }
        },
		{
			"type": "Feature",
            "properties": {
						"name":"Big Ben",
                        "popupContent": "Big Ben"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-0.124627, 51.500731]
            }
		},
		{
			
			"type": "Feature",
            "properties": {
						"name":"BT Tower",
                        "popupContent": "BT Tower"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-0.138900, 51.521461]
            }
		}
 
	]
};

// Define the layer with the Point of Interest
var pois = {
	"type": "FeatureCollection",
    "features": [
	{
			"type": "Feature",
			"properties": {
						"name":"Trafalgar Square",
						"id":"0",
						"popupContent":"<b>Trafalgar Square</b> is a historic part of Central London. Its development started back in the 19th century and it was gradually involved to today's state, a square with remarkable statues and fountains <br>(www.london.gov.uk/about-us/our-building-and-squares/trafalgar-square).", 
						"url":"https://www.london.gov.uk/about-us/our-building-and-squares/trafalgar-square"
		},
			"geometry": {
			"type": "Polygon",
			"coordinates": [
			[[-0.12898206710815427, 51.508278364891694],
            [-0.12853145599365234, 51.507563851354476],
            [-0.1272064447402954, 51.50781760510872],
            [-0.12741565704345703, 51.50853545346993],
            [-0.12898206710815427, 51.508278364891694]]
		]	
      }
    },
	{
			"type": "Feature",
			"properties": {
				"name":"Leicester Square",
				"id":"1",
				"popupContent":"<b>Leicester Square</b> was designed in the 17th century. It consists of a park with four statues and a William Shakespeare fountain. It is surrounded by pedestrian streets and many entertainment buildings, restaurants and pubs. There is also a booth used for the purchase of thatre tickets <br>(en.wikipedia.org/wiki/Leicester_Square).",
				"url":"https://en.wikipedia.org/wiki/Leicester_Square"
			},
			"geometry": {
			"type": "Polygon",
			"coordinates": [
			[[-0.13074159622192383, 51.51057207795239],
            [-0.13036072254180908, 51.50994774536988],
            [-0.12958824634552002, 51.510067938403715],
            [-0.1297277212142944, 51.51087589445653],
            [-0.13074159622192383, 51.51057207795239]]
		]	
      }
    },
	{
			"type": "Feature",
			"properties": {
				"name":"Covent Garden",
				"id":"2",
				"popupContent":"<b>Covent Garden</b> is a big pedestrian area and it is known to be a beautiful shopping and dinning district in the centre of London. It is a place with many street performers that entertain the attendants. It started being developed in the 7th century <br>(www.coventgarden.london/visit).",
				"url":"https://www.coventgarden.london/visit"
			},
			"geometry": {
			"type": "Polygon",
			"coordinates": [
			[[-0.12352645397186278, 51.51201435366509],
            [-0.1230114698410034, 51.51146348985871],
            [-0.12178301811218262, 51.511914197104836],
            [-0.12244820594787596, 51.51250845613963],
            [-0.12352645397186278, 51.51201435366509]]
        ]
      }
    },
	{
			"type": "Feature",
			"properties": {
				"name": "St Paul's Church",
				"id":"3",
				"popupContent":"<b>St Paul's Church</b> was established in the early 17th century and was refurbished in the late 18th century. It is also known as the 'Actor's Church', as it was connected with the first two theatres that were the considered as the first West End theatres. It currently holds shows, concerts, event and founraisers <br>(actorschurch.org/about-us/the-church-and-the-theatre/).",
				"url":"https://actorschurch.org/about-us/the-church-and-the-theatre/"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": [
          [[-0.1250070333480835, 51.51132493821658],
            [-0.12444645166397095, 51.510817468363086],
            [-0.12328505516052245, 51.51132493821658],
            [-0.12383222579956053, 51.51184408738163],
            [-0.1250070333480835, 51.51132493821658]]
		]
      }
    },
    {
			"type": "Feature",
			"properties": {
				"name": "Victoria Embankment Gardens",
				"id":"4",
				"popupContent":"<b>Victoria Embankment Gardens</b> is a park by the river with a remarkable design. It opened in 1865 and it contains many statues and memorials. It hosts events during the summertime, which can be watched by the visitors <br>(www.westminster.gov.uk/my-parks/parks/victoria-embankment-gardens/).",
				"url":"https://www.westminster.gov.uk/my-parks/parks/victoria-embankment-gardens/"
			},
			"geometry": {
			"type": "Polygon",
			"coordinates": [
			[[-0.12326359748840332, 51.507827621675276],
            [-0.12252330780029295, 51.50738689066314],
            [-0.12219607830047607, 51.50765400087639],
            [-0.12183129787445068, 51.50744031283107],
            [-0.12134850025177, 51.508078035123795],
            [-0.12102663516998291, 51.50838520707442],
            [-0.12011468410491943, 51.50907967515499],
            [-0.11885941028594971, 51.50972739065096],
            [-0.11899352073669432, 51.50975743908446],
            [-0.11928856372833252, 51.50969066476084],
            [-0.12039899826049805, 51.509366807902865],
            [-0.12242138385772705,51.50848871019998],
            [-0.12300074100494385, 51.50816484479804],
            [-0.12326359748840332, 51.507827621675276]]
        ]
      }
    },
	{
			"type": "Feature",
			"properties": {
				"name": "Chinatown",
				"id":"5",
				"popupContent":"<b>Chinatown</b> is an ethnic enclave that consists of Chinese restaurants, souvenir shops and other businesses. It is a very well designed area, with a great ambience, and it also contains a big Chinese gate <br>(en.wikipedia.org/wiki/Chinatown,_London).",
				"url":"https://en.wikipedia.org/wiki/Chinatown,_London"
			},
			"geometry": {
			"type": "Polygon",
			"coordinates": [
			[[-0.13231337070465088, 51.51177731611638],
            [-0.1320934295654297, 51.51147016703562],
            [-0.13010859489440915, 51.51218128077621],
            [-0.13041436672210693, 51.512505117627406],
            [-0.13231337070465088, 51.51177731611638]]
        ]
      }
    }
  ]
};

// Define the layer with the route of the walking tour
var route = {
	"type": "FeatureCollection",
    "features": [
        {
	      "type": "Feature",
		  "properties": {},
          "geometry": {
          "type": "LineString",
          "coordinates": [
          [-0.12973308563232422, 51.51456493319091],
          [-0.12960433959960938, 51.514237772597326],
          [-0.12943267822265625, 51.51385051824575],
          [-0.12918591499328613, 51.51349664501128],
          [-0.12921810150146484, 51.51338313791981],
          [-0.12913227081298828, 51.51322956905176],
          [-0.1288747787475586, 51.513416522387836],
          [-0.1284348964691162, 51.51318283059785],
          [-0.12799501419067383, 51.51289572190039],
          [-0.12769460678100586, 51.51270208943155],
          [-0.12741565704345703, 51.51265535043646],
          [-0.12716889381408691, 51.51268205843953],
          [-0.1271367073059082, 51.51322956905176],
          [-0.12704014778137207, 51.51368359725126],
          [-0.1269221305847168, 51.513696950953346],
          [-0.12638568878173828, 51.51331636891036],
          [-0.12618184089660645, 51.513136092096],
          [-0.12543082237243652, 51.51254851826757],
          [-0.12620329856872559, 51.51218128077621],
          [-0.12671828269958496, 51.51197429106742],
          [-0.12707233428955078, 51.51188081153581],
          [-0.1275390386581421, 51.51187413441908],
          [-0.1283624768257141, 51.51185243378293],
          [-0.12936830520629883, 51.51198764527055],
          [-0.12953996658325195, 51.51194758264939],
          [-0.12982964515686035, 51.512221343191854],
          [-0.13171792030334473, 51.51156030882836],
          [-0.1321578025817871, 51.51140005662906],
          [-0.13240456581115723, 51.511827394574496],
          [-0.13308048248291016, 51.51146682844727],
          [-0.13344526290893555, 51.511233126655355],
          [-0.1339280605316162, 51.5106922693391],
          [-0.13358473777770996, 51.51025156603757],
          [-0.13343453407287598, 51.510091309234575],
          [-0.13294100761413571, 51.51013137348817],
          [-0.13213634490966797, 51.51029163015023],
          [-0.13068795204162595, 51.51061881908489],
          [-0.13004422187805176, 51.51084584676069],
          [-0.12964725494384766, 51.51097271467499],
          [-0.12943267822265625, 51.51103948711957],
          [-0.1284027099609375, 51.51086587856013],
          [-0.1284027099609375, 51.511319930318024],
          [-0.1271367073059082, 51.511800686070345],
          [-0.12711524963378906, 51.51138002506451],
          [-0.12705087661743164, 51.51099274641864],
          [-0.12690067291259766, 51.51061881908489],
          [-0.1269114017486572, 51.510298307498935],
          [-0.1269114017486572, 51.50991769706187],
          [-0.1269221305847168, 51.50952372852358],
          [-0.12732982635498047, 51.50948366373565],
          [-0.1272118091583252, 51.50894946319621],
          [-0.12726545333862305, 51.508675682992084],
          [-0.1272869110107422, 51.508475354971175],
          [-0.1270294189453125, 51.5077274559105],
          [-0.12564539909362793, 51.50850874303585],
          [-0.12414336204528809, 51.509290016763835],
          [-0.12237310409545897, 51.510118018740904],
          [-0.12180447578430176, 51.50958382563948],
          [-0.12117147445678712, 51.509069658863694],
          [-0.12037754058837889, 51.50943024396354],
          [-0.12149333953857422, 51.51045856357376],
          [-0.1200878620147705, 51.5110061009095],
          [-0.1205921173095703, 51.51151356866181],
          [-0.1198303699493408, 51.511834071698075],
          [-0.11916518211364746, 51.51210783292268],
          [-0.11984109878540038, 51.51237491545877],
          [-0.12084960937499999, 51.51280892124027],
          [-0.1205921173095703, 51.51311606129482],
          [-0.12039899826049805, 51.51326295363235],
          [-0.12089252471923827, 51.51342987616821],
          [-0.12141823768615723, 51.51358344436099],
          [-0.12185811996459961, 51.51321621521269],
          [-0.12140750885009766, 51.51285566007781],
          [-0.12121438980102538, 51.51264867343323],
          [-0.12209415435791016, 51.512234697322576],
          [-0.12182593345642091, 51.5119342284345],
          [-0.12267351150512694, 51.511533600167624],
          [-0.12367129325866699, 51.511099582236]
        ]
      }
    }
  ]
};

// Define the starting point of the route
var StartPoint = 
        {
            "type": "Feature",
            "properties": {
                        "popupContent": "Start"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-0.12973308563232422, 51.51456493319091]
            }
        };
		

// Define the ending point of the route
var EndPoint = {
			"type": "Feature",
            "properties": {
                        "popupContent": "End"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-0.12367129325866699, 51.511099582236]
            }
		};


// Definition of a function that enables the presentation of pop-up messages in the map
// for each feature of a layer. It takes as an argument the popupContent, which is included in
// the properties of each GeoJSON feature
function onEachFeature(feature, layer) {
if (feature.properties && feature.properties.popupContent) {
	layer.bindPopup(feature.properties.popupContent);
	}
}