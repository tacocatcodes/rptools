function killMe() {
  var carAccident = [
    "Broken bone",
    "Concussion",
    "Whiplash",
    "Internal bleeding",
    "Punctured organ",
    "Road rash",
    "Laceration requiring stitches",
    "Knocked out",
    "Shallow scrape/laceration not requiring stitches",
    "Black eye",
    "Broken nose",
    "Dislocated joint"
  ];

  var burnWounds = [
    "First-degree (superficial) burn - the burn site is red, painful, dry, and without blisters. Mild sunburn is an example.",
    "Second-degree burn - the burn site looks red, blistered, and may be swollen and painful.",
    "Third-degree (deep) burn - the burn site may look white or blackened and charred. Complete destruction of the skin and tissue underneath."
  ];

  var gswWounds = [
    "Grazing wound",
    "Bullet passed through",
    "Bullet lodged in tissue",
    "Bullet hit bone and ricocheted",
    "Broken bone"
  ];

  var bluntForceTrauma = [
    "Broken bone",
    "Bruising",
    "Concussion",
    "Busted lip",
    "Broken tooth",
    "Amnesia (short term)",
    "Amnesia (long term)",
    "Dislocated joint"
  ];

  var impalement = [
    "Laceration requiring stitches",
    "Shallow wound",
    "Deep wound, requiring reparative surgery",
    "Small boo-boo, but only on SenTaL"
  ];

  var misc = [
    "Sleeping limb",
    "Headache",
    "Migraine",
    "Sinus infection",
    "Diarrhea",
    "Upset stomach",
    "Urinary tract infection",
    "Jaundice (yellowing of the skin)",
    "Vomiting",
    "Blindness (temporary)"
  ];

  var checkboxes = document.getElementsByName('trauma');
  for (var i = 0; i < checkboxes.length; i++) {
    console.log(checkboxes[i] + ": " + checkboxes[i].checked)
    if (checkboxes[i].checked) {
      switch(checkboxes[i].value) {
        case "car":
          results = chooseInjuries(carAccident);
          break;
        case "burn":
          results = chooseInjuries(burnWounds);
          break;
        case "gsw":
          results = chooseInjuries(gswWounds);
          break;
        case "blunt":
          results = chooseInjuries(bluntForceTrauma);
          break;
        case "stab":
          results = chooseInjuries(impalement);
          break;
        case "misc":
          results = chooseInjuries(misc);
          break;
      }
    }
  }

  var breaks = [
    "Stress",
    "Compound",
    "Non-Displaced Transverse",
    "Displaced Transverse",
    "Oblique",
    "Comminuted",
    "Greenstick",
    "Spiral",
    "Impacted"
  ];

  var locations = [
    "forearm",
    "upper arm",
    "lower leg",
    "upper leg",
    "shoulder",
    "pelvis",
    "rib",
    "collarbone"
  ];

  for (var q = 0; q < results.length; q++) {
    if (results[q] == "Broken bone") {
      var fractureType = breaks[Math.floor(Math.random() * breaks.length)];
      var location = locations[Math.floor(Math.random() * locations.length)];
      results[q] = fractureType + " fracture located in the " + location;
    }
  }

  document.getElementById("result").innerHTML = Array.from(new Set(results)).join("<br>");
}

function chooseInjuries(possibilities) {

    var results = [];
    var max = 3;

    if (possibilities.length < 3) {
      max = possibilities.length;
    }

    for (var x = 0; x < Math.random() * max; x++) {
      var rand = Math.floor(Math.random() * possibilities.length);
      results.push(possibilities[rand]);
    }
    return results;
}
