{
    "textures":[],
    "metadata":{
        "version":4.4,
        "generator":"io_three",
        "type":"Object"
    },
    "animations":[{
        "name":"default",
        "fps":24,
        "tracks":[{
            "keys":[{
                "time":1,
                "value":[1.85591,3.46135,0.085792]
            },{
                "time":11,
                "value":[-0.877466,-2.46878,-2.87594]
            },{
                "time":22,
                "value":[-0.902426,0.052356,5.87055]
            }],
            "name":"Cube.position",
            "type":"vector3"
        },{
            "keys":[{
                "time":1,
                "value":[1,1,1]
            },{
                "time":11,
                "value":[1,1,1]
            },{
                "time":22,
                "value":[1,1,1]
            }],
            "name":"Cube.scale",
            "type":"vector3"
        },{
            "keys":[{
                "time":1,
                "value":[0,0.707107,0.707107,0]
            },{
                "time":11,
                "value":[0,0.707107,0.707107,0]
            },{
                "time":22,
                "value":[0,0.707107,0.707107,0]
            }],
            "name":"Cube.quaternion",
            "type":"quaternion"
        }]
    }],
    "images":[],
    "geometries":[{
        "name":"CubeGeometry.3",
        "materials":[{
            "DbgColor":15658734,
            "opacity":1,
            "depthWrite":true,
            "specularCoef":50,
            "shading":"phong",
            "depthTest":true,
            "doubleSided":false,
            "vertexColors":false,
            "visible":true,
            "transparent":false,
            "colorSpecular":[0.5,0.5,0.5],
            "blending":"NormalBlending",
            "DbgIndex":0,
            "DbgName":"Material",
            "colorDiffuse":[0.043221,0,0.64],
            "colorEmissive":[0,0,0],
            "wireframe":false
        }],
        "data":{
            "colors":[],
            "skinIndices":[],
            "faces":[35,0,1,2,3,0,0,0,0,0,35,4,7,6,5,0,1,1,1,1,35,0,4,5,1,0,2,2,2,2,35,1,5,6,2,0,3,3,3,3,35,2,6,7,3,0,4,4,4,4,35,4,0,3,7,0,5,5,5,5],
            "influencesPerVertex":2,
            "bones":[],
            "animations":[],
            "vertices":[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-0.999999,1,-0.999999,1,1,1,1,1,1,-1,1],
            "morphTargets":[],
            "normals":[-0,-0,-1,-0,0,1,-1,0,0,0,1,-0,1,-0,-0,-0,-1,0],
            "uvs":[],
            "skinWeights":[]
        },
        "type":"Geometry",
        "uuid":"7C02788D-8723-4521-BCB7-9D98D285FF97"
    }],
    "materials":[{
        "specular":8355711,
        "name":"Material",
        "depthWrite":true,
        "depthTest":true,
        "uuid":"1BB98D48-22AF-43CE-AE82-F5DC8164BFD4",
        "emissive":0,
        "vertexColors":0,
        "skinning":true,
        "type":"MeshPhongMaterial",
        "blending":"NormalBlending",
        "shininess":50,
        "color":721059
    }],
    "object":{
        "children":[{
            "name":"Cube",
            "uuid":"F384A5FF-DE09-4C22-B755-95D9AF5C545C",
            "matrix":[-1,0,0,0,0,0,1,0,0,1,0,0,0.475139,3.404,0.158869,1],
            "visible":true,
            "type":"Mesh",
            "material":"1BB98D48-22AF-43CE-AE82-F5DC8164BFD4",
            "castShadow":true,
            "receiveShadow":true,
            "geometry":"7C02788D-8723-4521-BCB7-9D98D285FF97"
        }],
        "matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "type":"Scene",
        "uuid":"9DC1E298-9276-4F1D-AD8F-251347CBCE85"
    }
}