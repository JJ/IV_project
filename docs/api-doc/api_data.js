define({ "api": [
  {
    "type": "delete",
    "url": "/cancelacion",
    "title": "Delete a couple of the competition",
    "name": "Cancelacion",
    "group": "Couples",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni1",
            "description": "<p>DNI of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni2",
            "description": "<p>DNI of the second person in the couple.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/categoria_pareja/:nombre1/:nombre2",
    "title": "Get cathegory of a couple",
    "name": "CategoriaPareja",
    "group": "Couples",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre1",
            "description": "<p>name of the first person of the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre2",
            "description": "<p>name of the second person of the couple.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/categoria_pareja/Ana/Paula",
        "type": "json"
      }
    ],
    "description": "<p>Returns the cathegory of the couple</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couple.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"categoria\": \"femenina\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "post",
    "url": "/inscripcion",
    "title": "Post a new couple in the competition",
    "name": "Inscripcion",
    "group": "Couples",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre1",
            "description": "<p>Name of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre2",
            "description": "<p>Name of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni1",
            "description": "<p>DNI of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni2",
            "description": "<p>DNI of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefono1",
            "description": "<p>Telf of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefono2",
            "description": "<p>Telf of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo1",
            "description": "<p>Email of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo2",
            "description": "<p>Email of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couple.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "put",
    "url": "/modificacion",
    "title": "Modify a couple",
    "name": "Modificacion",
    "group": "Couples",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "participante1",
            "description": "<p>DNI of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "participante2",
            "description": "<p>DNI of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nnombre1",
            "description": "<p>New or old name of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nnombre2",
            "description": "<p>New or old name of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ndni1",
            "description": "<p>New or old DNI of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ndni2",
            "description": "<p>New or old DNI of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ntelefono1",
            "description": "<p>New or old telf of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ntelefono2",
            "description": "<p>New or old telf of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ncorreo1",
            "description": "<p>New or old email of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ncorreo2",
            "description": "<p>New or old email of the second person in the couple.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/pareja_integrante/:nombre",
    "title": "Get the partner of a player",
    "name": "Pareja",
    "group": "Couples",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the player</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/pareja_integrante/Ana",
        "type": "json"
      }
    ],
    "description": "<p>Returns the partner of the player</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>DNI of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telf of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Email of the partner.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"nombre\": \"Paula\",\n  \"dni\": \"290999\",\n  \"telefono\": \"66666630\",\n  \"correo\": \"paula_nuevo@correo.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/pareja_integrante/:categoria/:nombre",
    "title": "Get the partner of a player in a cathegory",
    "name": "ParejaCategoria",
    "group": "Couples",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couple</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the player</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/pareja_integrante/femenina/Ana",
        "type": "json"
      }
    ],
    "description": "<p>Returns the partner of the player</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>DNI of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telf of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Email of the partner.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"nombre\": \"Paula\",\n  \"dni\": \"290999\",\n  \"telefono\": \"66666630\",\n  \"correo\": \"paula_nuevo@correo.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/parejas",
    "title": "Get couples of the competition",
    "name": "Parejas",
    "group": "Couples",
    "description": "<p>Returns a list of the couples</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n     \"participante1\": {\n       \"nombre\": \"Laura\",\n       \"dni\": \"2222\",\n       \"telefono\": \"664\",\n       \"correo\": \"laura@laura.com\"\n     },\n     \"participante2\": {\n       \"nombre\": \"Marcos\",\n       \"dni\": \"2242\",\n       \"telefono\": \"668\",\n       \"correo\": \"marcos@marcos.com\"\n     },\n     \"categoria\": \"mixta\"\n   },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/categoria/:categoria",
    "title": "Get couples of a cathegory",
    "name": "ParejasCategoria",
    "group": "Couples",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couples.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns a list of the couples that compose the specified cathegory.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n     \"participante1\": {\n       \"nombre\": \"Laura\",\n       \"dni\": \"2222\",\n       \"telefono\": \"664\",\n       \"correo\": \"laura@laura.com\"\n     },\n     \"participante2\": {\n       \"nombre\": \"Marcos\",\n       \"dni\": \"2242\",\n       \"telefono\": \"668\",\n       \"correo\": \"marcos@marcos.com\"\n     },\n     \"categoria\": \"mixta\"\n   },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/plazas/:categoria",
    "title": "Get the plazes of a cathegory",
    "name": "Plazas",
    "group": "Couples",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couple</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/plazas/femenina",
        "type": "json"
      }
    ],
    "description": "<p>Returns the number of avaible plazes in a cathegory</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plazas",
            "description": "<p>Avaible plazes of the cathegory.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"plazas\": 18\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "Request Status information",
    "name": "GetStatus",
    "group": "Status",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Request Status information",
    "name": "GetStatusRoot",
    "group": "Status",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status"
  }
] });
