$(document).ready(function () {
  let characters = [];
  //let characters = [{id: "6", name: "John", lastname: "Doe"}]
  //let characters = [{id: "2", name: "Frank", lastname: "Collins", age: "29"},{id: "6", name: "John", lastname: "Doe", age: "64"}, {id: "18", name: "Ivan", lastname: "Pernar", age: "73"}]
  $("#showModal").hide();
  $("#new-char").popover("hide");
  let index = 0;

  if (characters.length == 0 || characters[index].name == undefined) {
    $("#character-name").html("No characters");
    $("#character-stats").html("No characters to show stats");
    $("#character-stats").css("pointer-events", "none");
    $("#arrow-left").css("pointer-events", "none");
    $("#arrow-right").css("pointer-events", "none");
    $("#play").css("pointer-events", "none");
    $("#new-char").popover("hide");
  } else {
    loadCharacter(index);
  }
  $("#new-char").click(() => {
    if (characters.length < 3) {
      console.log("Open Creator");
      $("#new-char").popover("hide");
    } else {
      console.log("You have maximum number of characters. ");
      $("#new-char").popover("show");
      console.log("test" + characters.length);
    }
  });
  $("#arrow-left").click(() => {
    if (index > 0) {
      index -= 1;
      console.log(index);
      loadCharacter(index);
      $("#showModal").hide();
    } else {
      //$("#arrow-left").css("pointer-events", "none")
      console.log("cant go down");
    }
  });
  $("#arrow-right").click(() => {
    if (index < characters.length - 1) {
      index += 1;
      console.log(index);
      loadCharacter(index);
      $("#showModal").hide();
    } else {
      //$("#arrow-right").css("pointer-events", "none")
      console.log("cant go up");
    }
  });
  $("#close").click(() => {
    $("#charStats").hide();
    $("#showModal").hide();
  });
  $("#play").click(() => {
    //mp trigger spawn char ID characters[newIndex].id
    console.log("Spawn character" + characters[index].name);
  });

  function loadCharacter(index) {
    let newIndex = index;
    $("#character-name").html(
      characters[newIndex].name + " " + characters[newIndex].lastname
    );
    $("#character-stats").html("show character stats");
    $("#character-stats").click(() => {
      $("#create-character").css("display", "none");
      $("#charStats").show();
      $("#charStats").html(characters[newIndex].age);
      $("#showModal").show();
    });
    //mp.trigger(set appereance and look) pass char ID characters[newIndex].id
  }
});
