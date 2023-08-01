let arr = [
  {
    detailsTitle: "Details",
    fields: [
      ["name", "Ridahm", "string"],
      ["status", true, "boolean"],
      ["msg", "Hello, I am React Developer.", "string"],
    ],
    sections: [
      {
        title: "AA",
        fields: [
          ["aa", "aa", "string"],
          ["bb", true, "boolean"],
          ["cc", 4545654654645, "number"],
        ],
      },
      {
        title: "BB",
        fields: [
          ["aa", "aa", "string"],
          ["bb", false, "boolean"],
          ["cc", 65645656445456456, "number"],
        ],
      },
    ],
    fieldType: "string",
  },
  {
    detailsTitle: "newPage",
    fields: [
      ["aa", "aaaa", "string"],
      ["bb", true, "boolean"],
      ["cc", 424334344534545, "number"],
    ],
    sections: [
      {
        title: "aa",
        fields: [
          ["aa", "aa", "string"],
          ["bb", true, "boolean"],
          ["cc", 55465654656546, "number"],
        ],
        fieldType: "number",
      },
      {
        title: "BB",
        fields: [
          ["aa", "aaaaaa", "string"],
          ["bb", false, "boolean"],
          ["number", 544354656356565, "number"],
        ],
        fieldType: "number",
      },
    ],
    fieldType: "string",
  },
];

let obj = {
  App_Details: {
    name: "Ridahm",
    status: true,
    msg: "Hello, I am React Developer.",
    AA: {
      aa: "aa",
      bb: true,
      cc: 4545654654645,
    },
    BB: {
      aa: "aa",
      bb: false,
      cc: 65645656445456456,
    },
  },
  newPage: {
    aa: {
      aa: "aa",
      bb: true,
      cc: 55465654656546,
    },
    bb: true,
    cc: 424334344534545,
    BB: {
      aa: "aaaaaa",
      bb: false,
      number: 544354656356565,
    },
  },
};

console.log(obj);
console.log(arr);

// object to Array
var objtoarr = {};

arr.map((items, index) => {
  const detailsTitle = items.detailsTitle;
  // console.log(detailsTitle);
  var fieldobj = {};
  items.fields.map((field, index) => {
    // console.log(field[0]);
    fieldobj = { ...fieldobj, [field[0]]: field[1] };
  });
  // console.log(fieldobj)
  items.sections.map((section, index) => {
    var sectiontitle = section.title;
    var sectionfieldobj = {};
    section.fields.map((item, index) => {
      sectionfieldobj = { ...sectionfieldobj, [item[0]]: item[1] };
    });
    fieldobj = { ...fieldobj, [sectiontitle]: sectionfieldobj };
  });
  objtoarr = { ...objtoarr, [detailsTitle]: fieldobj };
});

// console.log("object to array : ", objtoarr);

// Array To Object


var arrtoobj = [];
Object.keys(obj).forEach((key) => {
  var Alldetails = {};

  Alldetails.detailsTitle = key;
  var finalfieldsarr = [];
  var finalsectionarr = [];

  for (var k in obj[key]) {
    var fieldsarr = [];
    var finalsectionobj = [];
  
    if (!(typeof obj[key][k] === "object")) {
      fieldsarr.push(k, obj[key][k], typeof obj[key][k]);
      //   console.log(fieldsarr);
      finalfieldsarr = [...finalfieldsarr, fieldsarr];
    }
    if (typeof obj[key][k] === "object") {
        var sectionarrobj = {};
      var finalsectionfieldsarr = [];
      sectionarrobj.title = k;

      for (var z in obj[key][k]) {
        var sectionfieldsarr = [];
        sectionfieldsarr.push(z, obj[key][k][z], typeof obj[key][k][z]);

        // console.log(sectionfieldsarr);
        finalsectionfieldsarr = [...finalsectionfieldsarr, sectionfieldsarr];
      }

      //  sectionarr.push( k, obj[key][k], typeof obj[key][k]);
      sectionarrobj.fields = finalsectionfieldsarr;
    //   console.log(sectionarrobj);
      finalsectionarr.push(sectionarrobj);


    }
  }
  //   console.log(finalfieldsarr);
  Alldetails.fieldType = typeof key;
  Alldetails.sections =finalsectionarr;
  Alldetails.fields = finalfieldsarr;
  arrtoobj.push(Alldetails);
  // arrtoobj.push(fieldsarr);
});
// console.log("array to object : ", arrtoobj);
