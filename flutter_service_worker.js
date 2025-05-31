'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a261cf6471ff227fa239b13fb5fdb852",
".git/config": "3057f315a1bdce3c7f550c89eb0beab2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "2d7a2142ea166794c1f062640de702cb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eeb956c3aaef6f23cc202bd47e2c8aef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80a9bd2b74238243c9696521ddf40322",
".git/logs/refs/heads/janu": "bcfed65a631c01bd54f98433f5ef07e6",
".git/logs/refs/remotes/origin/janu": "e2ab5f8617031edd18cdcfdf8010520f",
".git/objects/09/cb4e93264ec54448e9bb253c5cc33893035692": "8482b6e7480061dc1743ba178063d089",
".git/objects/09/d4f3c361cf3c91d59af2b12893d8898950fa2e": "a62b29917c35ea048af49f67f0016133",
".git/objects/0a/03411cb77f99f379fa7637686bfad390f0582c": "80af6009d5f928fbe6c9c4fb2e16cb06",
".git/objects/10/2a3d2ce59c4e46da801f91aab02645a975721d": "d4df8a1a663b6e47c0978a055588dba0",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/834697e9062f0560597d0134d6899970a2c996": "16b265fb8e3760d54625e0fe544eecc3",
".git/objects/1f/bf3fe407d4c5724bdc7e3495c08ac06357b627": "5510b86765d8a5d35fff174cc8e0123d",
".git/objects/20/41cb7e81b6916169570ed42efadfe5e8dfaf54": "ef3ac766f9511721be2af3b2d0d43ab8",
".git/objects/23/9d69dc23299efaf89c57c0879b9c18a56919ed": "dbb7f0b3fc967e97fc8a17984de7c584",
".git/objects/27/5105421755ee375b9036cbcdc8850f79b7c5b0": "2b707700cf33f2a6b89be44a94553aeb",
".git/objects/2d/d09feb35bcf4d0617e62838abb3abe1c95151f": "f0be15c3257ec507c661170d5145ed7d",
".git/objects/33/0e0a378a2b38c049e9139e8c4934ea4c4ebf83": "23021651c47f8ee301c0e25d92c18a6b",
".git/objects/35/f50dd60475919a359920f70a5298e9fb0695c6": "60a74272631514c9cc51c553391c3e3c",
".git/objects/3e/2ffe5a594353274d77ff3ed051b94572954796": "349516495cc80f166cd99bb9be4b476b",
".git/objects/3f/5aef91184e89ed8a618a9af9ae4332b45fd048": "3fafbebad54b1c8c21e9bb3a39999def",
".git/objects/43/83c9def79b89c86e6125ad89d70a425ba782e9": "0d6cfca2039ea3af0f8fe5092e4cbad1",
".git/objects/45/0025b5deff335970d5ef8933f7a321d8e007fc": "9b8879e7de299c5fead3b6243e1a6d7f",
".git/objects/47/c526e834246d8dc1738eedb0113debc7b5cbe6": "03b62769643eafeb17fed0de3a46c4ed",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/54f6f7dd43dd11f102601be769c8448318cee5": "bfae2c93167facb51c4050ac9c4b73cc",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/49aedad6ab2732bd97ade781d1a346dce94c35": "6f2c8d2e725c5a73f888cce605952cb0",
".git/objects/56/a358560fbfd59dc48d569b7bf0ba2b8b7cc296": "e1e7bad153e22c81af56b3e5b5339353",
".git/objects/67/744e5813b9caa1c08eef8471a23282b8c8c7c6": "a934fc15910335a506e83a3c26568a0b",
".git/objects/67/b621f049cba241bc59ca1af9c9916d79eb3376": "4b57df7b9b80a8cbd7afafbd5c6ce983",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/7760b5df73bf4e48e8d17146a574e8deabc80d": "13d16aef91d25b6dde089b816cc1d6a7",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/73/fa580e6fbce3b02d0b65ef2164334b7f207002": "fcbdcd3471f62462a016ce58b16aa742",
".git/objects/75/8f0027f1ff7e0637f0ed8b35ce3b54806d8032": "3ca247265075d23619060ac3bb82c5d2",
".git/objects/78/d5a0b2578958af46bbff5d187beab5e421713d": "30a42e158804bc59aa3825d51a40d1d8",
".git/objects/78/e6a5121ea18bc491117788d4224f21cc88ade1": "b4d02896e1b167aeb2f18970edadf1fd",
".git/objects/79/1fec66ced8c6fc058eb2bbf190c0e411880caa": "f9096f6da7777505987f473ebde54006",
".git/objects/7e/68e43ffe427b8c1beb26965edbfeacf225692b": "88c6082b1bcd06f12efd93b47800f02a",
".git/objects/82/1a09f05aa7588a23d2b5a97b95dbffc938add9": "29609257b86ccee06f235ea32793ee48",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/d8e768c8413a2cadfc74a3dfbf105ca2f1bdef": "b5572d366020671c87e9b9d62b3fc6a2",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/0a237eebd38a5e05c1aaf48becc5439bf46da6": "e580c093a691a0948343706925a96352",
".git/objects/9c/30a59d508947a31c72db83caa9539ff415df51": "aab3aef03429f589c381b7f7c3e0cabd",
".git/objects/a1/8c7060260a5a5723ba7eb5f1e720a818ff5ed4": "0dbc284a5bfcafa70edd4df7f4a6809b",
".git/objects/a4/2b9410fc295d09056573a49358cc9851b28602": "329166fac88929464eeb15da0759f5a6",
".git/objects/a9/05726081f7e2197d7a3b4d123e4e6d3240f119": "e2c92862c45715ff67689f2b63e290d0",
".git/objects/ad/e4954ff7dbc953243c02121e06b66870899af0": "335da4d2f6d37a86d4296a0e0c197c7f",
".git/objects/af/70ee174238ce7fe8f7266522d0a780443d2180": "e732eff3a2285cd6e9603b51e09b5308",
".git/objects/b0/8ad15103936562a644cfed4e73977b95abadca": "b25c25307fd22e0c723f78c2a31c00b5",
".git/objects/b4/c985f3a28ab4cf8d4d3f4cfe67ac1f432d11dc": "d452a2e7283c6671e0031720d3fa5711",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/e0987745e2f0a418f03b20d284e27dda5f30a1": "d45c49bdcc11c66bc523b5df27a6de56",
".git/objects/ba/339c2e80e993086e4d6162a6ae9715ee8df861": "9eb5f6cfa06e42734fa20ba1e85c475c",
".git/objects/ba/678e9bb161fb97eddad7c09f21fdf365958cc7": "cd803df946eab4ed443be453f10628f4",
".git/objects/c1/f8bcd19d8e72be188f6c188212dd003b8ad36a": "b19a644dbc18678363157a84400b0129",
".git/objects/c5/f50a526f8db42c7f4d26272c4f48945b5fdd10": "960f934ab12d71b8c7b04eb874acb147",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/331b711f95c5cc3796a14b811f5eba6accc694": "b537195044e86fb819182f92195c3226",
".git/objects/ca/0b9ecf126179568ef206a6e176732d7c87defd": "8d109fc6d7ff1090e6734d0980fcc80a",
".git/objects/cf/381de59a3f611290bf3e8c0b7a71bc9836adb3": "c90f791d38b5ce41c5bf1832495630a3",
".git/objects/cf/d68d19256947e370976e041f76e0492d8cdb18": "ebf270df90bea857d0df76ec0b1b866c",
".git/objects/d0/0b8c1eeae8991eceea3bc15c39360ab41083f3": "c58686b2a34a339e8f35bf9c117732c3",
".git/objects/d3/0af3052ddd0e1ae88f31588a271718687e0a80": "eadf06ae4d425e48e26115f2758529c1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/db/364ace68b764d4d04452e12d7b720217aa4785": "0d73164b44e379adc61cfad3e9c93723",
".git/objects/db/c155ed593e76d3d46dd4d2da71317f3cf326f7": "e0d523d470a000b45ff2e848c236bfc9",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/420be8bbeaf51bc8714fa35009c01f0d8a948f": "bf4f0d0a6348bfd7cdfe726f31d8c504",
".git/objects/df/8e5dd0a37e2041026b7754bcac77387a0d2e64": "3829096bc27436ca82db78d78d6bc48e",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/09890c14d72aaf3621d6a1c7cc1b907ae9b0c6": "8df81f3800def833448aab222480b7fd",
".git/objects/e3/649909157414b93ab3b57a4b610b0ca8682532": "f8120619bb61cb869fd16f73565abd77",
".git/objects/e6/504068a73fd03450862a8438ff678b0c8ccd28": "d6097166a4dc61a24a788858c91cd3be",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/42c3d69684b0b92933bfe0c2d99a7187278da1": "c4147a992823e7052508ee5eb6f067d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0c3114a75979559ecd28e1f5e85a0ec854f19c": "a84352ecee45e8a5c4c95cfa1f7f669e",
".git/objects/ee/59422b7d44465c571a90db05abbb1eb74375df": "ea7c4c44cd87e1dc0a347917ccbc46b5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/5dddeca905ca10390fdc4ed115060d8490800b": "1d862d905bf7d93b055ee4a2144523b6",
".git/objects/f4/554e7e5ab89f45eea37c235c76f01ac327ebfe": "9ed8a4fe67d3ca2236f0ec18024ce0ef",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/889d0a16ede57dd48a1e868ec2782f9d65fbf5": "7e8598b283b35fbb4390e7dbebac368d",
".git/objects/fc/3cc12b293febe523eda54604e52fead61f557f": "0f12938cf84ce0d40a447ad0c90bde14",
".git/refs/heads/janu": "4960965229c60e3a03783d8614f0c54e",
".git/refs/remotes/origin/janu": "4960965229c60e3a03783d8614f0c54e",
"assets/AssetManifest.bin": "9e09d9b4b21ccfa4da9b9ccbcd27fd5d",
"assets/AssetManifest.bin.json": "0a0cd25917d41a1801ea7978308bf0f7",
"assets/AssetManifest.json": "09e8143d920c6ff2e102e5172b2e5134",
"assets/assets/font/Metropolis-Bold.otf": "dea4998b081c6c1133a3b5b08ff2218c",
"assets/assets/font/Metropolis-ExtraBold.otf": "d7eaa8ab58ec03f16c8d08389711f553",
"assets/assets/font/Metropolis-Medium.otf": "f4bca87fd0d19e61c27dc96299c75f8c",
"assets/assets/font/Metropolis-Regular.otf": "f7b5e589f88206b4bd5cb1408c5362e6",
"assets/assets/font/Metropolis-SemiBold.otf": "2556a4f74e2c523893e6928d6e300f1c",
"assets/assets/img/add.png": "30050b9e7d1342d3e70710a01c90276e",
"assets/assets/img/app.png": "f305703f92319bdcc7429f7aae49e062",
"assets/assets/img/AppIcon.png": "f305703f92319bdcc7429f7aae49e062",
"assets/assets/img/app_logo.png": "ca4a8e8ec1034ef42b835a37ccb58a54",
"assets/assets/img/btn_back.png": "d5d051d62d275e26c5d8e9623a945bb7",
"assets/assets/img/btn_next.png": "50dda2a8413e43d80bb202c7740dce0a",
"assets/assets/img/cash.png": "1f953031db18576610af7e8b09b4b361",
"assets/assets/img/check.png": "8eedeb57cb76dd63a10eaef427bc2c16",
"assets/assets/img/dropdown.png": "f0cd9937947a5be83d9e3690b6f9694c",
"assets/assets/img/facebook_logo.png": "38202a021ac69951688cb61c6b669cc1",
"assets/assets/img/favorites_btn.png": "b6cce0c82b80619b432f7baf08f5e2c7",
"assets/assets/img/favorites_btn_2.png": "18038c4ef8cef8aeff5dc345f2e8d850",
"assets/assets/img/fav_icon.png": "9330377d64d94e291bb4e5343a385f46",
"assets/assets/img/google_logo.png": "adf58f1117060bc2ee5f7e676b57e2e3",
"assets/assets/img/image.png": "b11ff6cbbdd5ed890a5df698c93a0022",
"assets/assets/img/item_2.png": "87cb7a81906bff21669c7cc498708936",
"assets/assets/img/location-pin.png": "edde02cc535c74f423497db7368316b2",
"assets/assets/img/map_pin.png": "6f2dde54c401296d3b836230b5b06eb5",
"assets/assets/img/menu_1.png": "34ffb6b9bd0c4d16eabe91d0b0abb4c3",
"assets/assets/img/menu_2.png": "e456f6b030f23adf92540cf5b5bd6161",
"assets/assets/img/menu_3.png": "d3f186bd5704103fc7ca8db74cd9a687",
"assets/assets/img/menu_4.png": "0c4d6d79e88aed0ad4f11fab0bc3a63c",
"assets/assets/img/more_inbox.png": "95abf30ae25ac6b0682b6d23ea71885f",
"assets/assets/img/more_info.png": "4e0179efe80f77cb061e2702390561d6",
"assets/assets/img/more_my_order.png": "47aa32d5cdcfe6ad4dccdb1cbf571b17",
"assets/assets/img/more_notification.png": "84a4acaf149d46beb62fc6c4b210c02a",
"assets/assets/img/more_payment.png": "a7ee42cfee46384d3c753fa68e98d288",
"assets/assets/img/on_boarding_2.png": "5ed08e841fd3a2cac39aeea92f23a51f",
"assets/assets/img/on_boarding_3.png": "60b14f09f936fdc6ca5f44c05b29252c",
"assets/assets/img/paypal.png": "b6d2295455327bf89aaa6105fa928db6",
"assets/assets/img/rate.png": "e04aec629a857f3b0faf5e70f5b0f614",
"assets/assets/img/search.png": "6c5c30445169b17a6145fe20433c9175",
"assets/assets/img/shopping_add.png": "a25c987e9914a2ec862085b8b5797b33",
"assets/assets/img/shopping_cart.png": "71f26b74b0c34dc1deb2a08480f65a64",
"assets/assets/img/splash_bg.png": "212076bd598ba266747bc232c72063a8",
"assets/assets/img/tab_home.png": "13017c54f3129efff3e1e78a57061ffa",
"assets/assets/img/tab_menu.png": "4341761a3a5ca774f1f0459cbdea8789",
"assets/assets/img/tab_more.png": "acd25cfece38c9e1b42c57e6fa5b04e0",
"assets/assets/img/tab_offer.png": "90ff0160e579a241e3110bd2e64863a5",
"assets/assets/img/tab_order.png": "90ff0160e579a241e3110bd2e64863a5",
"assets/assets/img/tab_profile.png": "f81546c894288017a0a79c06a8e4ed04",
"assets/assets/img/visa_icon.png": "b14f44ca7530d28165d68c62e25ac110",
"assets/FontManifest.json": "eb38a8cb5d0f0c5acfbb632278ac6630",
"assets/fonts/MaterialIcons-Regular.otf": "fba8292c94f765cb2760543662f11c7b",
"assets/NOTICES": "69a6a3edaeb5e5f62f08044801405506",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "7a9af1309bede4c21094970042503cf5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4744152886001c5b1a85adc288748480",
"/": "4744152886001c5b1a85adc288748480",
"main.dart.js": "1c7d1f0f28a28ac82b23a42519ac2f04",
"manifest.json": "eee254a2e198d428a526abd3b4041fdb",
"version.json": "43ae026f61d1c4aad142150cd2035795"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
