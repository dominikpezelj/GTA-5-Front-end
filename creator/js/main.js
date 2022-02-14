const fathers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 42, 43, 44];
const mothers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45];
const fatherNames = ["Benjamin", "Daniel", "Joshua", "Noah", "Andrew", "Juan", "Alex", "Isaac", "Evan", "Ethan", "Vincent", "Angel", "Diego", "Adrian", "Gabriel", "Michael", "Santiago", "Kevin", "Louis", "Samuel", "Anthony", "Claude", "Niko", "John"];
const motherNames = ["Hannah", "Audrey", "Jasmine", "Giselle", "Amelia", "Isabella", "Zoe", "Ava", "Camila", "Violet", "Sophia", "Evelyn", "Nicole", "Ashley", "Grace", "Brianna", "Natalie", "Olivia", "Elizabeth", "Charlotte", "Emma", "Misty"];
const eyeColors = ["Green", "Emerald", "Light Blue", "Ocean Blue", "Light Brown", "Dark Brown", "Hazel", "Dark Gray", "Light Gray", "Pink", "Yellow", "Purple", "Blackout", "Shades of Gray", "Tequila Sunrise", "Atomic", "Warp", "ECola", "Space Ranger", "Ying Yang", "Bullseye", "Lizard", "Dragon", "Extra Terrestrial", "Goat", "Smiley", "Possessed", "Demon", "Infected", "Alien", "Undead", "Zombie"];

const appearanceItemNames = [
    // blemishes
    ["None", "Measles", "Pimples", "Spots", "Break Out", "Blackheads", "Build Up", "Pustules", "Zits", "Full Acne", "Acne", "Cheek Rash", "Face Rash", "Picker", "Puberty", "Eyesore", "Chin Rash", "Two Face", "T Zone", "Greasy", "Marked", "Acne Scarring", "Full Acne Scarring", "Cold Sores", "Impetigo"],
    // facial hair
    ["None", "Light Stubble", "Balbo", "Circle Beard", "Goatee", "Chin", "Chin Fuzz", "Pencil Chin Strap", "Scruffy", "Musketeer", "Mustache", "Trimmed Beard", "Stubble", "Thin Circle Beard", "Horseshoe", "Pencil and 'Chops", "Chin Strap Beard", "Balbo and Sideburns", "Mutton Chops", "Scruffy Beard", "Curly", "Curly & Deep Stranger", "Handlebar", "Faustic", "Otto & Patch", "Otto & Full Stranger", "Light Franz", "The Hampstead", "The Ambrose", "Lincoln Curtain"],
    // eyebrows
    ["None", "Balanced", "Fashion", "Cleopatra", "Quizzical", "Feminine", "Seductive", "Pinched", "Chola", "Triomphe", "Carefree", "Curvaceous", "Rodent", "Double Tram", "Thin", "Penciled", "Mother Plucker", "Straight and Narrow", "Natural", "Fuzzy", "Unkempt", "Caterpillar", "Regular", "Mediterranean", "Groomed", "Bushels", "Feathered", "Prickly", "Monobrow", "Winged", "Triple Tram", "Arched Tram", "Cutouts", "Fade Away", "Solo Tram"],
    // ageing
    ["None", "Crow's Feet", "First Signs", "Middle Aged", "Worry Lines", "Depression", "Distinguished", "Aged", "Weathered", "Wrinkled", "Sagging", "Tough Life", "Vintage", "Retired", "Junkie", "Geriatric"],
    // makeup
    ["None", "Smoky Black", "Bronze", "Soft Gray", "Retro Glam", "Natural Look", "Cat Eyes", "Chola", "Vamp", "Vinewood Glamour", "Bubblegum", "Aqua Dream", "Pin Up", "Purple Passion", "Smoky Cat Eye", "Smoldering Ruby", "Pop Princess"],
    // blush
    ["None", "Full", "Angled", "Round", "Horizontal", "High", "Sweetheart", "Eighties"],
    // complexion
    ["None", "Rosy Cheeks", "Stubble Rash", "Hot Flush", "Sunburn", "Bruised", "Alchoholic", "Patchy", "Totem", "Blood Vessels", "Damaged", "Pale", "Ghostly"],
    // sun damage
    ["None", "Uneven", "Sandpaper", "Patchy", "Rough", "Leathery", "Textured", "Coarse", "Rugged", "Creased", "Cracked", "Gritty"],
    // lipstick
    ["None", "Color Matte", "Color Gloss", "Lined Matte", "Lined Gloss", "Heavy Lined Matte", "Heavy Lined Gloss", "Lined Nude Matte", "Liner Nude Gloss", "Smudged", "Geisha"],
    // freckles
    ["None", "Cherub", "All Over", "Irregular", "Dot Dash", "Over the Bridge", "Baby Doll", "Pixie", "Sun Kissed", "Beauty Marks", "Line Up", "Modelesque", "Occasional", "Speckled", "Rain Drops", "Double Dip", "One Sided", "Pairs", "Growth"],
    // chest hair
    ["None", "Natural", "The Strip", "The Tree", "Hairy", "Grisly", "Ape", "Groomed Ape", "Bikini", "Lightning Bolt", "Reverse Lightning", "Love Heart", "Chestache", "Happy Face", "Skull", "Snail Trail", "Slug and Nips", "Hairy Arms"]
];

const hairList = [
    // male
    [
        { ID: 0, Name: "Close Shave", Collection: "mpbeach_overlays", Overlay: "FM_Hair_Fuzz" },
        { ID: 1, Name: "Buzzcut", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_001" },
        { ID: 2, Name: "Faux Hawk", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_002" },
        { ID: 3, Name: "Hipster", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_003" },
        { ID: 4, Name: "Side Parting", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_004" },
        { ID: 5, Name: "Shorter Cut", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_005" },
        { ID: 6, Name: "Biker", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_006" },
        { ID: 7, Name: "Ponytail", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_007" },
        { ID: 8, Name: "Cornrows", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_008" },
        { ID: 9, Name: "Slicked", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_009" },
        { ID: 10, Name: "Short Brushed", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_013" },
        { ID: 11, Name: "Spikey", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_002" },
        { ID: 12, Name: "Caesar", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_011" },
        { ID: 13, Name: "Chopped", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_012" },
        { ID: 14, Name: "Dreads", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_014" },
        { ID: 15, Name: "Long Hair", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_015" },
        { ID: 16, Name: "Shaggy Curls", Collection: "multiplayer_overlays", Overlay: "NGBea_M_Hair_000" },
        { ID: 17, Name: "Surfer Dude", Collection: "multiplayer_overlays", Overlay: "NGBea_M_Hair_001" },
        { ID: 18, Name: "Short Side Part", Collection: "multiplayer_overlays", Overlay: "NGBus_M_Hair_000" },
        { ID: 19, Name: "High Slicked Sides", Collection: "multiplayer_overlays", Overlay: "NGBus_M_Hair_001" },
        { ID: 20, Name: "Long Slicked", Collection: "multiplayer_overlays", Overlay: "NGHip_M_Hair_000" },
        { ID: 21, Name: "Hipster Youth", Collection: "multiplayer_overlays", Overlay: "NGHip_M_Hair_001" },
        { ID: 22, Name: "Mullet", Collection: "multiplayer_overlays", Overlay: "NGInd_M_Hair_000" },
        { ID: 24, Name: "Classic Cornrows", Collection: "mplowrider_overlays", Overlay: "LR_M_Hair_000" },
        { ID: 25, Name: "Palm Cornrows", Collection: "mplowrider_overlays", Overlay: "LR_M_Hair_001" },
        { ID: 26, Name: "Lightning Cornrows", Collection: "mplowrider_overlays", Overlay: "LR_M_Hair_002" },
        { ID: 27, Name: "Whipped Cornrows", Collection: "mplowrider_overlays", Overlay: "LR_M_Hair_003" },
        { ID: 28, Name: "Zig Zag Cornrows", Collection: "mplowrider2_overlays", Overlay: "LR_M_Hair_004" },
        { ID: 29, Name: "Snail Cornrows", Collection: "mplowrider2_overlays", Overlay: "LR_M_Hair_005" },
        { ID: 30, Name: "Hightop", Collection: "mplowrider2_overlays", Overlay: "LR_M_Hair_006" },
        { ID: 31, Name: "Loose Swept Back", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_000_M" },
        { ID: 32, Name: "Undercut Swept Back", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_001_M" },
        { ID: 33, Name: "Undercut Swept Side", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_002_M" },
        { ID: 34, Name: "Spiked Mohawk", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_003_M" },
        { ID: 35, Name: "Mod", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_004_M" },
        { ID: 36, Name: "Layered Mod", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_005_M" },
        { ID: 72, Name: "Flattop", Collection: "mpgunrunning_overlays", Overlay: "MP_Gunrunning_Hair_M_000_M" },
        { ID: 73, Name: "Military Buzzcut", Collection: "mpgunrunning_overlays", Overlay: "MP_Gunrunning_Hair_M_001_M" }
    ],
    // female
    [
        { ID: 0, Name: "Close Shave", Collection: "mpbeach_overlays", Overlay: "FM_Hair_Fuzz" },
        { ID: 1, Name: "Short", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_001" },
        { ID: 2, Name: "Layered Bob", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_002" },
        { ID: 3, Name: "Pigtails", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_003" },
        { ID: 4, Name: "Ponytail", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_004" },
        { ID: 5, Name: "Braided Mohawk", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_005" },
        { ID: 6, Name: "Braids", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_006" },
        { ID: 7, Name: "Bob", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_007" },
        { ID: 8, Name: "Faux Hawk", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_008" },
        { ID: 9, Name: "French Twist", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_009" },
        { ID: 10, Name: "Long Bob", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_010" },
        { ID: 11, Name: "Loose Tied", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_011" },
        { ID: 12, Name: "Pixie", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_012" },
        { ID: 13, Name: "Shaved Bangs", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_013" },
        { ID: 14, Name: "Top Knot", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_014" },
        { ID: 15, Name: "Wavy Bob", Collection: "multiplayer_overlays", Overlay: "NG_M_Hair_015" },
        { ID: 16, Name: "Messy Bun", Collection: "multiplayer_overlays", Overlay: "NGBea_F_Hair_000" },
        { ID: 17, Name: "Pin Up Girl", Collection: "multiplayer_overlays", Overlay: "NGBea_F_Hair_001" },
        { ID: 18, Name: "Tight Bun", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_007" },
        { ID: 19, Name: "Twisted Bob", Collection: "multiplayer_overlays", Overlay: "NGBus_F_Hair_000" },
        { ID: 20, Name: "Flapper Bob", Collection: "multiplayer_overlays", Overlay: "NGBus_F_Hair_001" },
        { ID: 21, Name: "Big Bangs", Collection: "multiplayer_overlays", Overlay: "NGBea_F_Hair_001" },
        { ID: 22, Name: "Braided Top Knot", Collection: "multiplayer_overlays", Overlay: "NGHip_F_Hair_000" },
        { ID: 23, Name: "Mullet", Collection: "multiplayer_overlays", Overlay: "NGInd_F_Hair_000" },
        { ID: 25, Name: "Pinched Cornrows", Collection: "mplowrider_overlays", Overlay: "LR_F_Hair_000" },
        { ID: 26, Name: "Leaf Cornrows", Collection: "mplowrider_overlays", Overlay: "LR_F_Hair_001" },
        { ID: 27, Name: "Zig Zag Cornrows", Collection: "mplowrider_overlays", Overlay: "LR_F_Hair_002" },
        { ID: 28, Name: "Pigtail Bangs", Collection: "mplowrider2_overlays", Overlay: "LR_F_Hair_003" },
        { ID: 29, Name: "Wave Braids", Collection: "mplowrider2_overlays", Overlay: "LR_F_Hair_003" },
        { ID: 30, Name: "Coil Braids", Collection: "mplowrider2_overlays", Overlay: "LR_F_Hair_004" },
        { ID: 31, Name: "Rolled Quiff", Collection: "mplowrider2_overlays", Overlay: "LR_F_Hair_006" },
        { ID: 32, Name: "Loose Swept Back", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_000_F" },
        { ID: 33, Name: "Undercut Swept Back", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_001_F" },
        { ID: 34, Name: "Undercut Swept Side", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_002_F" },
        { ID: 35, Name: "Spiked Mohawk", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_003_F" },
        { ID: 36, Name: "Bandana and Braid", Collection: "multiplayer_overlays", Overlay: "NG_F_Hair_003" },
        { ID: 37, Name: "Layered Mod", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_006_F" },
        { ID: 38, Name: "Skinbyrd", Collection: "mpbiker_overlays", Overlay: "MP_Biker_Hair_004_F" },
        { ID: 76, Name: "Neat Bun", Collection: "mpgunrunning_overlays", Overlay: "MP_Gunrunning_Hair_F_000_F" },
        { ID: 77, Name: "Short Bob", Collection: "mpgunrunning_overlays", Overlay: "MP_Gunrunning_Hair_F_001_F" }
    ]
];

let customCharacter = new Array();

fatherCurrentSelect = 0;
motherCurrentSelect = 0;
currentStep = 1;



// Function Calls
motherPick("");
fatherPick("");



// Change Steps
function changeStep(action) {
    switch (action) {
        case 'next':
            currentStep += 1;
            $('body').attr('data-step', currentStep);
            callNavColor(currentStep)
            console.log(currentStep)
            if (currentStep < 2) {
                console.log("jedan")
            }
            break;
        case 'prev':
            currentStep -= 1;
            $('body').attr('data-step', currentStep);
            callNavColor(currentStep)
            console.log(currentStep)
            break;
        case 'save':
            console.log("save parameters")
            creatorSaveAllData()

            break;
        default:
            break;
    }
}
$("#stepName").html("entry&nbsp;&nbsp;&nbsp;permit")
$("#nav-one").css("background", "#33bbff")
$("#nav-two").css("background", "rgba(0,0,0,0.5)")
$("#nav-three").css("background", "rgba(0,0,0,0.5)")
$("#nav-four").css("background", "rgba(0,0,0,0.5)")
$("#nav-five").css("background", "rgba(0,0,0,0.5)")

function callNavColor(step) {
    $("#stepName").html("selection&nbsp;&nbsp;&nbsp;Gender")
    $("#nav-one").css("background", "rgba(0,0,0,0.5)")
    $("#nav-two").css("background", "rgba(0,0,0,0.5)")
    $("#nav-three").css("background", "rgba(0,0,0,0.5)")
    $("#nav-four").css("background", "rgba(0,0,0,0.5)")
    $("#nav-five").css("background", "rgba(0,0,0,0.5)")

    if (step == 1) {
        $("#nav-one").css("background", "#33bbff")
        $("#stepName").html("select&nbsp;&nbsp;&nbsp;Gender")
    }
    if (step == 2) {
        $("#nav-two").css("background", "#33bbff")
        $("#stepName").html("select&nbsp;&nbsp;&nbsp;Parents")
    }
    if (step == 3) {
        $("#nav-three").css("background", "#33bbff")
        $("#stepName").html("select&nbsp;&nbsp;&nbsp;Features")
    }
    if (step == 4) {
        $("#nav-four").css("background", "#33bbff")
        $("#stepName").html("select&nbsp;&nbsp;&nbsp;Appereance")
    }
    if (step == 5) {
        $("#nav-five").css("background", "#33bbff")
        $("#stepName").html("select&nbsp;&nbsp;&nbsp;Hair & Color")
    }
}



// Randomize at current Step
function randomize(step) {
    var stepClass = $('.step-' + step);
    switch (step) {
        case '1':

            break;
        case '2':
            randomizeStep2Parameters()

            break;
        case '3':
            randomizeStep3Sliders()
            break;
        case '4':

            randomizeStep4Parameters();
            break;
        case '5':

            randomizeStep5Parameters()
            break;
    }
}



// Father Gender Select
function fatherPick(action) {
    var fatherDiv = $('.father-selection');
    var fatherSpanValue = $('.show-value', fatherDiv);
    var fatherInput = $('input[name="father"]', fatherSpanValue);

    switch (action) {
        case 'next':
            if (fatherCurrentSelect == (fatherNames.length - 1)) {
                fatherCurrentSelect = 0;
            } else {
                fatherCurrentSelect += 1;
            }
            break;
        case 'prev':
            if (fatherCurrentSelect == 0) {
                fatherCurrentSelect = (fatherNames.length - 1);
            } else {
                fatherCurrentSelect -= 1;
            }
            break;
        default:
            fatherInput.val(fathers[fatherCurrentSelect]);
            fatherSpanValue[0].innerText = fatherNames[fatherCurrentSelect];
            $('#maleParent').attr("src", `images/fathers/${fatherNames[fatherCurrentSelect].toLowerCase()}` + ".jpg")
            console.log(fatherNames[fatherCurrentSelect])
            break;
    }

    fatherInput.val(fathers[fatherCurrentSelect]);
    fatherSpanValue[0].innerText = fatherNames[fatherCurrentSelect];
    $('#maleParent').attr("src", `images/fathers/${fatherNames[fatherCurrentSelect].toLowerCase()}` + ".jpg")
}

// Mother Gender Select
function motherPick(action) {
    var motherDiv = $('.mother-selection');
    var motherSpanValue = $('.show-value', motherDiv);
    var motherInput = $('input[name="mother"]', motherSpanValue);

    switch (action) {
        case 'next':
            if (motherCurrentSelect == (motherNames.length - 1)) {
                motherCurrentSelect = 0;

            } else {
                motherCurrentSelect += 1;

            }
            break;
        case 'prev':
            if (motherCurrentSelect == 0) {
                motherCurrentSelect = (motherNames.length - 1);
            } else {
                motherCurrentSelect -= 1;

            }
            break;
        default:
            motherInput.val(mothers[motherCurrentSelect]);
            motherSpanValue[0].innerText = motherNames[motherCurrentSelect];
            $('#femaleParent').attr("src", `images/mothers/${motherNames[motherCurrentSelect].toLowerCase()}` + ".jpg")
            break;
    }

    motherInput.val(mothers[motherCurrentSelect]);
    motherSpanValue[0].innerText = motherNames[motherCurrentSelect];
    $('#femaleParent').attr("src", `images/mothers/${motherNames[motherCurrentSelect].toLowerCase()}` + ".jpg")
}

///////////////////////////////////////////// STEP 3 //////////////////////////////////////////////////
//FEATURES LEFT SLIDERS
$('#showNoseWidth').html($("#noseWidth").val());
$('#showNoseBottomHeight').html($("#noseBottomHeight").val());
$('#showNoseTipLength').html($("#noseTipLength").val());
$('#showNoseBridgeDepth').html($("#noseBridgeDepth").val());
$('#showNoseTipHeight').html($("#noseTipHeight").val());
$('#showNoseBroken').html($("#noseBroken").val());
$('#showBrowHeight').html($("#browHeight").val());
$('#showBrowDepth').html($("#browDepth").val());
$('#showCheekboneHeight').html($("#cheekboneHeight").val());
$('#showCheekboneWidth').html($("#cheekboneWidth").val());
$('#showCheekDepth').html($("#cheekDepth").val());

$(document).on('input change', '#noseWidth', function() {
    $('#showNoseWidth').html($(this).val());
});
$(document).on('input change', '#noseBottomHeight', function() {
    $('#showNoseBottomHeight').html($(this).val());
});
$(document).on('input change', '#noseTipLength', function() {
    $('#showNoseTipLength').html($(this).val());
});
$(document).on('input change', '#noseBridgeDepth', function() {
    $('#showNoseBridgeDepth').html($(this).val());
});
$(document).on('input change', '#noseTipHeight', function() {
    $('#showNoseTipHeight').html($(this).val());
});
$(document).on('input change', '#noseBroken', function() {
    $('#showNoseBroken').html($(this).val());
});
$(document).on('input change', '#browHeight', function() {
    $('#showBrowHeight').html($(this).val());
});
$(document).on('input change', '#browDepth', function() {
    $('#showBrowDepth').html($(this).val());
});
$(document).on('input change', '#cheekboneHeight', function() {
    $('#showCheekboneHeight').html($(this).val());
});
$(document).on('input change', '#cheekboneWidth', function() {
    $('#showCheekboneWidth').html($(this).val());
});
$(document).on('input change', '#cheekDepth', function() {
    $('#showCheekDepth').html($(this).val());
});

//FEATURES RIGHT SLIDERS
$('#showEyeSize').html($("#eyeSize").val());
$('#showLipThickness').html($("#lipThickness").val());
$('#showJawWidth').html($("#jawWidth").val());
$('#showJawShape').html($("#jawShape").val());
$('#showChinHeight').html($("#chinHeight").val());
$('#showChinDepth').html($("#chinDepth").val());
$('#showChinWidth').html($("#chinWidth").val());
$('#showChinIndent').html($("#chinIndent").val());
$('#showNeckWidth').html($("#neckWidth").val());
$('#showResamblance').html($("#resamblance").val());
$('#showSkinTone').html($("#skinTone").val());

$(document).on('input change', '#eyeSize', function() {
    $('#showEyeSize').html($(this).val());
});
$(document).on('input change', '#lipThickness', function() {
    $('#showLipThickness').html($(this).val());
});
$(document).on('input change', '#jawWidth', function() {
    $('#showJawWidth').html($(this).val());
});
$(document).on('input change', '#jawShape', function() {
    $('#showJawShape').html($(this).val());
});
$(document).on('input change', '#chinHeight', function() {
    $('#showChinHeight').html($(this).val());
});
$(document).on('input change', '#chinDepth', function() {
    $('#showChinDepth').html($(this).val());
});
$(document).on('input change', '#chinWidth', function() {
    $('#showChinWidth').html($(this).val());
});
$(document).on('input change', '#chinIndent', function() {
    $('#showChinIndent').html($(this).val());
});
$(document).on('input change', '#neckWidth', function() {
    $('#showNeckWidth').html($(this).val());
});
$(document).on('input change', '#resamblance', function() {
    $('#showResamblance').html($(this).val());
});
$(document).on('input change', '#skinTone', function() {
    $('#showSkinTone').html($(this).val());
});

///////////RANDOMIZE STEP 3 PARAMETERS ////////////////////////////////////////////
function randomizeStep3Sliders() {
    //LEFT FEATURES RANDOMIZE
    $("#noseWidth").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showNoseWidth').html($("#noseWidth").val());
    $("#noseBottomHeight").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showNoseBottomHeight').html($("#noseBottomHeight").val());
    $("#noseTipLength").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showNoseTipLength').html($("#noseTipLength").val());
    $("#noseBridgeDepth").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showNoseBridgeDepth').html($("#noseBridgeDepth").val());
    $("#noseTipHeight").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showNoseTipHeight').html($("#noseTipHeight").val());
    $("#noseBroken").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showNoseBroken').html($("#noseBroken").val());
    $("#browHeight").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showBrowHeight').html($("#browHeight").val());
    $("#browDepth").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showBrowDepth').html($("#browDepth").val());
    $("#cheekboneHeight").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showCheekboneHeight').html($("#cheekboneHeight").val());
    $("#cheekboneWidth").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showCheekboneWidth').html($("#cheekboneWidth").val());
    $("#cheekDepth").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showCheekDepth').html($("#cheekDepth").val());

    //RIGHT FEATURES RANDOMIZE
    $("#eyeSize").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showEyeSize').html($("#eyeSize").val());
    $("#lipThickness").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showLipThickness').html($("#lipThickness").val());
    $("#jawWidth").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showJawWidth').html($("#jawWidth").val());
    $("#jawShape").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showJawShape').html($("#jawShape").val());
    $("#chinHeight").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showChinHeight').html($("#chinHeight").val());
    $("#chinDepth").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showChinDepth').html($("#chinDepth").val());
    $("#chinWidth").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showChinWidth').html($("#chinWidth").val());
    $("#chinIndent").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showChinIndent').html($("#chinIndent").val());
    $("#neckWidth").val(randomFloatFromInterval(-1.00, 1.00))
    $('#showNeckWidth').html($("#neckWidth").val());

    $("#resamblance").val(randomPercentFromInterval(1, 100))
    $('#showResamblance').html($("#resamblance").val());
    $("#skinTone").val(randomPercentFromInterval(1, 100))
    $('#showSkinTone').html($("#skinTone").val());

    function randomFloatFromInterval(min, max) {
        return Math.random() * (max - min + 0.01) + min
    }


}



//Appereance list items
let blemishesIndex = 0
$("#blemishes").html(appearanceItemNames[0][0])
$("#showBlemishesOpacity").html($('#blemishesOpacity').val() + " %")
$(document).on('input change', '#blemishesOpacity', function() {
    $('#showBlemishesOpacity').html($(this).val() + " %");
});
$("#blemishes-next").click(() => {
    console.log("klik next")
    if (blemishesIndex < appearanceItemNames[0].length) {
        blemishesIndex++
        $("#blemishes").html(appearanceItemNames[0][blemishesIndex])
    } else {
        blemishesIndex = 0
        $("#blemishes").html(appearanceItemNames[0][blemishesIndex])
    }
})
$("#blemishes-prev").click(() => {
    console.log("klik prev")
    if (blemishesIndex > 0) {
        blemishesIndex--
        $("#blemishes").html(appearanceItemNames[0][blemishesIndex])
    } else {
        blemishesIndex = appearanceItemNames[0].length
        $("#blemishes").html(appearanceItemNames[0][blemishesIndex])
    }
})




let facialHairIndex = 0
$("#facial-hair").html(appearanceItemNames[1][0])
$("#showFacialHairOpacity").html($('#facialHairOpacity').val() + " %")
$(document).on('input change', '#facialHairOpacity', function() {
    $('#showFacialHairOpacity').html($(this).val() + " %");
});
$("#facialhair-next").click(() => {
    console.log("klik next")
    if (facialHairIndex < appearanceItemNames[1].length) {
        facialHairIndex++
        $("#facial-hair").html(appearanceItemNames[1][facialHairIndex])
    } else {
        facialHairIndex = 0
        $("#facial-hair").html(appearanceItemNames[1][facialHairIndex])
    }
})
$("#facialhair-prev").click(() => {
    console.log("klik prev")
    if (facialHairIndex > 0) {
        facialHairIndex--
        $("#facial-hair").html(appearanceItemNames[1][facialHairIndex])
    } else {
        facialHairIndex = appearanceItemNames[1].length
        $("#facial-hair").html(appearanceItemNames[1][facialHairIndex])
    }
})



let eyebrowsIndex = 0
$("#eyebrows").html(appearanceItemNames[2][0])
$("#showEyebrowsOpacity").html($('#eyebrowsOpacity').val() + " %")
$(document).on('input change', '#eyebrowsOpacity', function() {
    $('#showEyebrowsOpacity').html($(this).val() + " %");
});
$("#eyebrows-next").click(() => {
    console.log("klik next")
    if (eyebrowsIndex < appearanceItemNames[2].length) {
        eyebrowsIndex++
        $("#eyebrows").html(appearanceItemNames[2][eyebrowsIndex])
    } else {
        eyebrowsIndex = 0
        $("#eyebrows").html(appearanceItemNames[2][eyebrowsIndex])
    }
})
$("#eyebrows-prev").click(() => {
    console.log("klik prev")
    if (eyebrowsIndex > 0) {
        eyebrowsIndex--
        $("#eyebrows").html(appearanceItemNames[2][eyebrowsIndex])
    } else {
        eyebrowsIndex = appearanceItemNames[2].length
        $("#eyebrows").html(appearanceItemNames[2][eyebrowsIndex])
    }
})

let ageingIndex = 0
$("#ageing").html(appearanceItemNames[3][0])
$("#showAgeingOpacity").html($('#ageingOpacity').val() + " %")
$(document).on('input change', '#ageingOpacity', function() {
    $('#showAgeingOpacity').html($(this).val() + " %");
});
$("#ageing-next").click(() => {
    console.log("klik next")
    if (ageingIndex < appearanceItemNames[3].length) {
        ageingIndex++
        $("#ageing").html(appearanceItemNames[3][ageingIndex])
    } else {
        ageingIndex = 0
        $("#ageing").html(appearanceItemNames[3][ageingIndex])
    }
})
$("#ageing-prev").click(() => {
    console.log("klik prev")
    if (ageingIndex > 0) {
        ageingIndex--
        $("#ageing").html(appearanceItemNames[3][ageingIndex])
    } else {
        ageingIndex = appearanceItemNames[3].length
        $("#ageing").html(appearanceItemNames[3][ageingIndex])
    }
})


let makeUpIndex = 0
$("#makeup").html(appearanceItemNames[4][0])
$("#showMakeUpOpacity").html($('#makeUpOpacity').val() + " %")
$(document).on('input change', '#makeUpOpacity', function() {
    $('#showMakeUpOpacity').html($(this).val() + " %");
});
$("#makeup-next").click(() => {
    console.log("klik next")
    if (makeUpIndex < appearanceItemNames[4].length) {
        makeUpIndex++
        $("#makeup").html(appearanceItemNames[4][makeUpIndex])
    } else {
        makeUpIndex = 0
        $("#makeup").html(appearanceItemNames[4][makeUpIndex])
    }
})
$("#makeup-prev").click(() => {
    console.log("klik prev")
    if (makeUpIndex > 0) {
        makeUpIndex--
        $("#makeup").html(appearanceItemNames[4][makeUpIndex])
    } else {
        makeUpIndex = appearanceItemNames[4].length
        $("#makeup").html(appearanceItemNames[4][makeUpIndex])
    }
})


let blushIndex = 0
$("#blush").html(appearanceItemNames[5][0])
$("#showBlushOpacity").html($('#blushOpacity').val() + " %")
$(document).on('input change', '#blushOpacity', function() {
    $('#showBlushOpacity').html($(this).val() + " %");
});
$("#blush-next").click(() => {
    console.log("klik next")
    if (blushIndex < appearanceItemNames[5].length) {
        blushIndex++
        $("#blush").html(appearanceItemNames[5][blushIndex])
    } else {
        blushIndex = 0
        $("#blush").html(appearanceItemNames[5][blushIndex])
    }
})
$("#blush-prev").click(() => {
    console.log("klik prev")
    if (blushIndex > 0) {
        blushIndex--
        $("#blush").html(appearanceItemNames[5][blushIndex])
    } else {
        blushIndex = appearanceItemNames[5].length
        $("#blush").html(appearanceItemNames[5][blushIndex])
    }
})


///////// RIGHT APPEREANCE TAB


let complexionIndex = 0
$("#complexion").html(appearanceItemNames[6][0])
$("#showComplexionOpacity").html($('#complexionOpacity').val() + " %")
$(document).on('input change', '#complexionOpacity', function() {
    $('#showComplexionOpacity').html($(this).val() + " %");
});
$("#complexion-next").click(() => {
    console.log("klik next")
    if (complexionIndex < appearanceItemNames[6].length) {
        complexionIndex++
        $("#complexion").html(appearanceItemNames[6][complexionIndex])
    } else {
        complexionIndex = 0
        $("#complexion").html(appearanceItemNames[6][complexionIndex])
    }
})
$("#complexion-prev").click(() => {
    console.log("klik prev")
    if (complexionIndex > 0) {
        complexionIndex--
        $("#complexion").html(appearanceItemNames[6][complexionIndex])
    } else {
        complexionIndex = appearanceItemNames[6].length
        $("#complexion").html(appearanceItemNames[6][complexionIndex])
    }
})


let sunDamageIndex = 0
$("#sunDamage").html(appearanceItemNames[7][0])
$("#showSunDamageOpacity").html($('#sunDamageOpacity').val() + " %")
$(document).on('input change', '#sunDamageOpacity', function() {
    $('#showSunDamageOpacity').html($(this).val() + " %");
});
$("#sunDamage-next").click(() => {
    console.log("klik next")
    if (sunDamageIndex < appearanceItemNames[7].length) {
        sunDamageIndex++
        $("#sunDamage").html(appearanceItemNames[7][sunDamageIndex])
    } else {
        sunDamageIndex = 0
        $("#sunDamage").html(appearanceItemNames[7][sunDamageIndex])
    }
})
$("#sunDamage-prev").click(() => {
    console.log("klik prev")
    if (sunDamageIndex > 0) {
        sunDamageIndex--
        $("#sunDamage").html(appearanceItemNames[7][sunDamageIndex])
    } else {
        sunDamageIndex = appearanceItemNames[7].length
        $("#sunDamage").html(appearanceItemNames[7][sunDamageIndex])
    }
})


let lipstickIndex = 0
$("#lipstick").html(appearanceItemNames[8][0])
$("#showLipstickionOpacity").html($('#lipstickOpacity').val() + " %")
$(document).on('input change', '#lipstickOpacity', function() {
    $('#showLipstickionOpacity').html($(this).val() + " %");
});
$("#lipstick-next").click(() => {
    console.log("klik next")
    if (lipstickIndex < appearanceItemNames[8].length) {
        lipstickIndex++
        $("#lipstick").html(appearanceItemNames[8][lipstickIndex])
    } else {
        lipstickIndex = 0
        $("#lipstick").html(appearanceItemNames[8][lipstickIndex])
    }
})
$("#lipstick-prev").click(() => {
    console.log("klik prev")
    if (lipstickIndex > 0) {
        lipstickIndex--
        $("#lipstick").html(appearanceItemNames[8][lipstickIndex])
    } else {
        lipstickIndex = appearanceItemNames[8].length
        $("#lipstick").html(appearanceItemNames[8][lipstickIndex])
    }
})


let molesIndex = 0
$("#moles").html(appearanceItemNames[9][0])
$("#showMolesOpacity").html($('#molesOpacity').val() + " %")
$(document).on('input change', '#molesOpacity', function() {
    $('#showMolesOpacity').html($(this).val() + " %");
});
$("#moles-next").click(() => {
    console.log("klik next")
    if (molesIndex < appearanceItemNames[9].length) {
        molesIndex++
        $("#moles").html(appearanceItemNames[9][molesIndex])
    } else {
        molesIndex = 0
        $("#moles").html(appearanceItemNames[9][molesIndex])
    }
})
$("#moles-prev").click(() => {
    console.log("klik prev")
    if (molesIndex > 0) {
        molesIndex--
        $("#moles").html(appearanceItemNames[9][molesIndex])
    } else {
        molesIndex = appearanceItemNames[9].length
        $("#moles").html(appearanceItemNames[9][molesIndex])
    }
})



let chestHairIndex = 0
$("#chestHair").html(appearanceItemNames[10][0])
$("#showChestHairOpacity").html($('#chestHairOpacity').val() + " %")
$(document).on('input change', '#chestHairOpacity', function() {
    $('#showChestHairOpacity').html($(this).val() + " %");
});
$("#chestHair-next").click(() => {
    console.log("klik next")
    if (chestHairIndex < appearanceItemNames[10].length) {
        chestHairIndex++
        $("#chestHair").html(appearanceItemNames[10][chestHairIndex])
    } else {
        chestHairIndex = 0
        $("#chestHair").html(appearanceItemNames[10][chestHairIndex])
    }
})
$("#chestHair-prev").click(() => {
    console.log("klik prev")
    if (chestHairIndex > 0) {
        chestHairIndex--
        $("#chestHair").html(appearanceItemNames[10][chestHairIndex])
    } else {
        chestHairIndex = appearanceItemNames[10].length
        $("#chestHair").html(appearanceItemNames[10][chestHairIndex])
    }
})


/////////RANDOMIZE STEP 4

function randomizeStep4Parameters() {
    //RANDOMIZE BLEMISHES
    $("#blemishesOpacity").val(randomPercentFromInterval(1, 100))
    $('#showBlemishesOpacity').html($("#blemishesOpacity").val() + " %");
    $('#blemishes').html(appearanceItemNames[0][randomPercentFromInterval(0, appearanceItemNames[0].length)])
        //RANDOMIZE FACIAL HAIR
    $("#facialHairOpacity").val(randomPercentFromInterval(1, 100))
    $('#showFacialHairOpacity').html($("#facialHairOpacity").val() + " %");
    $('#facial-hair').html(appearanceItemNames[1][randomPercentFromInterval(0, appearanceItemNames[1].length)])
        //RANDOMIZE EYEBROWS
    $("#eyebrowsOpacity").val(randomPercentFromInterval(1, 100))
    $('#showEyebrowsOpacity').html($("#eyebrowsOpacity").val() + " %");
    $('#eyebrows').html(appearanceItemNames[2][randomPercentFromInterval(0, appearanceItemNames[2].length)])
        //RANDOMIZE EYEBROWS
    $("#ageingOpacity").val(randomPercentFromInterval(1, 100))
    $('#showAgeingOpacity').html($("#ageingOpacity").val() + " %");
    $('#ageing').html(appearanceItemNames[3][randomPercentFromInterval(0, appearanceItemNames[3].length)])
        //RANDOMIZE MAKEUP
    $("#makeUpOpacity").val(randomPercentFromInterval(1, 100))
    $('#showMakeUpOpacity').html($("#makeUpOpacity").val() + " %");
    $('#makeup').html(appearanceItemNames[4][randomPercentFromInterval(0, appearanceItemNames[4].length)])
        //RANDOMIZE BLUSh
    $("#blushOpacity").val(randomPercentFromInterval(1, 100))
    $('#showBlushOpacity').html($("#blushOpacity").val() + " %");
    $('#blush').html(appearanceItemNames[5][randomPercentFromInterval(0, appearanceItemNames[5].length)])
        //RANDOMIZE BLUSh
    $("#complexionOpacity").val(randomPercentFromInterval(1, 100))
    $('#showComplexionOpacity').html($("#complexionOpacity").val() + " %");
    $('#complexion').html(appearanceItemNames[6][randomPercentFromInterval(0, appearanceItemNames[6].length)])
        //RANDOMIZE SUN DAMAGE
    $("#sunDamageOpacity").val(randomPercentFromInterval(1, 100))
    $('#showSunDamageOpacity').html($("#sunDamageOpacity").val() + " %");
    $('#sunDamage').html(appearanceItemNames[7][randomPercentFromInterval(0, appearanceItemNames[7].length)])
        //RANDOMIZE LIPSTICK
    $("#lipstickOpacity").val(randomPercentFromInterval(1, 100))
    $('#showLipstickionOpacity').html($("#lipstickOpacity").val() + " %");
    $('#lipstick').html(appearanceItemNames[8][randomPercentFromInterval(0, appearanceItemNames[8].length)])
        //RANDOMIZE MOLES & FRECKLES
    $("#molesOpacity").val(randomPercentFromInterval(1, 100))
    $('#showMolesOpacity').html($("#molesOpacity").val() + " %");
    $('#moles').html(appearanceItemNames[9][randomPercentFromInterval(0, appearanceItemNames[9].length)])
        //RANDOMIZE CHEST HAIR
    $("#chestHairOpacity").val(randomPercentFromInterval(1, 100))
    $('#showChestHairOpacity').html($("#chestHairOpacity").val() + " %");
    $('#chestHair').html(appearanceItemNames[9][randomPercentFromInterval(0, appearanceItemNames[9].length)])

}


///// STEP 5 RANGE AND LIST ITEMS 
//GET GENDER VALUE
let gender = 0;
$("#malePick") // select the radio by its id
    .change(function() { // bind a function to the change event
        if ($(this).is(":checked")) { // check if the radio is checked
            gender = $(this).val(); // retrieve the value
            $("#hairStyle").html(hairList[gender][0]["Name"])
            console.log(gender)
                //GENDER MP.TRIGGER
        }
    });

$("#femalePick") // select the radio by its id
    .change(function() { // bind a function to the change event
        if ($(this).is(":checked")) { // check if the radio is checked
            gender = $(this).val(); // retrieve the value
            $("#hairStyle").html(hairList[gender][0]["Name"])
            console.log(gender)
                //GENDER MP.TRIGGER
        }
    });





let hairStyleIndex = 0
$("#hairStyle").html(hairList[gender][0]["Name"])


$("#hairStyle-next").click(() => {
    console.log("klik next")
    if (hairStyleIndex < hairList[gender].length) {
        hairStyleIndex++
        $("#hairStyle").html(hairList[gender][hairStyleIndex]["Name"])
    } else {
        hairStyleIndex = 0
        $("#hairStyle").html(hairList[gender][hairStyleIndex]["Name"])
    }
})
$("#hairStyle-prev").click(() => {
    console.log("klik prev")
    if (hairStyleIndex > 0) {
        hairStyleIndex--
        $("#hairStyle").html(hairList[gender][hairStyleIndex]["Name"])
    } else {
        hairStyleIndex = hairList[gender].length
        $("#hairStyle").html(hairList[gender][hairStyleIndex]["Name"])
    }
})





let eyeColorIndex = 0
$("#eyeColor").html(eyeColors[0])


$("#eyeColor-next").click(() => {
    console.log("klik next")
    if (eyeColorIndex < eyeColors.length) {
        eyeColorIndex++
        $("#eyeColor").html(eyeColors[eyeColorIndex])
    } else {
        eyeColorIndex = 0
        $("#eyeColor").html(eyeColors[eyeColorIndex])
    }
})
$("#eyeColor-prev").click(() => {
    console.log("klik prev")
    if (eyeColorIndex > 0) {
        eyeColorIndex--
        $("#eyeColor").html(eyeColors[eyeColorIndex])
    } else {
        eyeColorIndex = eyeColors.length
        $("#eyeColor").html(eyeColors[eyeColorIndex])
    }
})




//HAIR COLORS SLIDERS
$("#showHairColor").html($('#hairColor').val())
$(document).on('input change', '#hairColor', function() {
    $('#showHairColor').html($(this).val());
});
$("#showHairHighligted").html($('#hairHighlited').val())
$(document).on('input change', '#hairHighlited', function() {
    $('#showHairHighligted').html($(this).val());
});
$("#showEyebrownColor").html($('#eyebrownColor').val())
$(document).on('input change', '#eyebrownColor', function() {
    $('#showEyebrownColor').html($(this).val());
});
$("#showFacialHairColor").html($('#facialHairColor').val())
$(document).on('input change', '#facialHairColor', function() {
    $('#showFacialHairColor').html($(this).val());
});
$("#showBlushColor").html($('#blushColor').val())
$(document).on('input change', '#blushColor', function() {
    $('#showBlushColor').html($(this).val());
});
$("#showLipstickColor").html($('#lipstickColor').val())
$(document).on('input change', '#lipstickColor', function() {
    $('#showLipstickColor').html($(this).val());
});
$("#showChestHairColor").html($('#chestHairColor').val())
$(document).on('input change', '#chestHairColor', function() {
    $('#showChestHairColor').html($(this).val());
});

////RANDOMIZE HAIR & COLORS
function randomizeStep5Parameters() {
    //RANDOMIZE HAIR STYLE
    $('#hairStyle').html(hairList[gender][randomPercentFromInterval(0, hairList[gender].length)]["Name"])
        //RANDOMIZE EYE COLOR
    $('#eyeColor').html(eyeColors[randomPercentFromInterval(0, eyeColors.length)])
        //RANDOMIZE HAIR COLOR
    $("#hairColor").val(randomPercentFromInterval(1, 64))
    $('#showHairColor').html($("#hairColor").val());
    //RANDOMIZE HAIR HIGHLITED COLOR
    $("#hairHighlited").val(randomPercentFromInterval(1, 64))
    $('#showHairHighligted').html($("#hairHighlited").val());
    //RANDOMIZE EYEBROWN COLOR
    $("#eyebrownColor").val(randomPercentFromInterval(1, 64))
    $('#showEyebrownColor').html($("#eyebrownColor").val());
    //RANDOMIZE FACIAL HAIR COLOR
    $("#facialHairColor").val(randomPercentFromInterval(1, 64))
    $('#showFacialHairColor').html($("#facialHairColor").val());
    //RANDOMIZE BLUSH COLOR
    $("#blushColor").val(randomPercentFromInterval(1, 27))
    $('#showBlushColor').html($("#blushColor").val());
    //RANDOMIZE FACIAL HAIR COLOR
    $("#lipstickColor").val(randomPercentFromInterval(1, 32))
    $('#showLipstickColor').html($("#lipstickColor").val());
    //RANDOMIZE FACIAL HAIR COLOR
    $("#chestHairColor").val(randomPercentFromInterval(1, 64))
    $('#showChestHairColor').html($("#chestHairColor").val());

}

function randomizeStep2Parameters() {
    var randomFather = Math.floor(Math.random() * fathers.length);
    var randomMother = Math.floor(Math.random() * mothers.length);

    $('.father-selection input').val(fathers[randomFather]);
    $('.father-selection .show-value')[0].innerText = fatherNames[randomFather];
    $('#maleParent').attr("src", `images/fathers/${fatherNames[randomFather].toLowerCase()}` + ".jpg")

    $('.mother-selection input').val(mothers[randomMother]);
    $('.mother-selection .show-value')[0].innerText = motherNames[randomMother];
    $('#femaleParent').attr("src", `images/mothers/${motherNames[randomMother].toLowerCase()}` + ".jpg")
}





function randomPercentFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function creatorSaveAllData() {
    let firstName = $("#first-name").val()
    let lastName = $("#last-name").val()
    let nationality = $("#nationality").val()
    let dateOfBirth = $("#birth").val()
    let reason = $("#reason").val()

    let gender = 0;
    $("#femalePick") // select the radio by its id
        .change(function() { // bind a function to the change event
            if ($(this).is(":checked")) { // check if the radio is checked
                gender = $(this).val(); // retrieve the value
                $("#hairStyle").html(hairList[gender][0]["Name"])
                console.log(gender)
            }
        });

    $("#malePick") // select the radio by its id
        .change(function() { // bind a function to the change event
            if ($(this).is(":checked")) { // check if the radio is checked
                gender = $(this).val(); // retrieve the value
                $("#hairStyle").html(hairList[gender][0]["Name"])
                console.log(gender)
            }
        });

    if (firstName && firstName.length > 2) {
        if (lastName && lastName.length > 2) {
            if (nationality.length > 4) {
                if (isValidDate(dateOfBirth)) {
                    if (reason.length > 299) {
                        if (gender != 0 || gender != 1) {
                            console.log("unutra")
                                //SAVE ALL OTHER VALUES

                        } else {
                            console.log("gender")
                        }

                    } else {
                        console.log("reason")
                    }
                } else {
                    console.log("datebirth")
                }
            } else {
                console.log("nationality")
            }
        } else {
            console.log("lastname")
        }
    } else {
        console.log("firstname")

    }

    function isValidDate(dateString) {
        console.log(dateString)
        var regEx = /^\d{2}-\d{2}-\d{4}$/.test(dateString);
        console.log(regEx)
        if (regEx) {
            return true;
        } else return false
    }
    console.log(firstName + lastName + nationality + dateOfBirth + reason + gender)
}

/*GENDER PARENTS FEATURES APPEREANCE HAIR & COLOR*/