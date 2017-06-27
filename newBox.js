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
        "name":"CubeGeometry.2",
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
            "colorDiffuse":[0.64,0.64,0.64],
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
        "uuid":"33480296-FE81-444B-92FB-CCB608F701BE"
    }],
    "materials":[{
        "specular":8355711,
        "name":"Material",
        "depthWrite":true,
        "depthTest":true,
        "uuid":"ACA65861-A0C7-45CC-A2B1-9C51DFE396FD",
        "emissive":0,
        "vertexColors":0,
        "skinning":true,
        "type":"MeshPhongMaterial",
        "blending":"NormalBlending",
        "shininess":50,
        "color":10724259
    }],
    "object":{
        "children":[{
            "name":"Cube",
            "uuid":"AD9A49DD-F4AA-4F24-9BB1-F224FC3E9C72",
            "matrix":[-1,0,0,0,0,0,1,0,0,1,0,0,1.85591,3.46135,0.085792,1],
            "visible":true,
            "type":"Mesh",
            "material":"ACA65861-A0C7-45CC-A2B1-9C51DFE396FD",
            "castShadow":true,
            "receiveShadow":true,
            "geometry":"33480296-FE81-444B-92FB-CCB608F701BE"
        }],
        "matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "type":"Scene",
        "uuid":"6AE49FAF-FE82-46D0-AC28-0759AE08F763"
    }
}