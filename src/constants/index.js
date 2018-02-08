import { fromJS } from 'immutable'

export const intranetUrl = 'http://intranet.eel1.esquel.com/default.aspx'

export const years = [
    { value: '2017', text: '2017' },
    { value: '2018', text: '2018' },
    { value: '2019', text: '2019' },
    { value: '2020', text: '2020' },
    { value: '2021', text: '2021' },
    { value: '2022', text: '2022' },
    { value: '2023', text: '2023' },
    { value: '2024', text: '2024' },
    { value: '2025', text: '2025' },
    { value: '2026', text: '2026' },
]

export const seasons = [
    { value: 'S', text: 'Spring' },
    { value: 'F', text: 'Fall' },
]

export const sheets = [
    { value: 'fabric-item', text: 'Fabric Item', fabricitem: 'fabric-item' },
    { value: 'query', text: 'Query', query: 'query' },
    { value: 'collaboration', text: 'Collaboration', collaboration: 'collaboration' },
]

export const querys = [
    { value: 'fabric', text: 'Fabric' },
    { value: 'garment', text: 'Garment' },
    { value: 'trims', text: 'Trims' },
]

export const fabricWovenTypes = [
    { value: 'handloom', text: 'Handloom' },
    { value: 'trialweave', text: 'Trial Weave' },
    { value: 'fabriccoderequisition', text: 'Fabric Code Requisition' },
]

export const BASE_BREADCRUMB = ['Development', 'Fabric', 'Woven']

export const disableFilter = true

export const collaborationFilterValues = {
    years: [],
    seasons: [],
    taggings: []
}

export const rowsInEachPage = 5

export const COLLABORATION_TO_SHOPPINGCART_STATUS = {
    'NULL': '0',
    'WORKING': '1',
    'READY': '2',
}

export const JOASSIGN_MASTER_COLUMNS = [
    {
        columnName: "GEW Recommendations (Finishing)",
        stateName: "finishingList",
    },
    {
        columnName: "Fabric Finishing",
        stateName: "finishingList",
    },
]

export const twShoppingCartStateName = {
    product: 'trialWeaveProductFileContent',
    delivery: 'trialWeaveDeliveryFileContent',
}

export const shoppingCartMasterColumns = [
    {
        columnName: "DESTINATION",
        stateName: "destinationList",
        multi: false,
        state: twShoppingCartStateName.delivery,
        async: false,
    },
    {
        columnName: "SHIP MODE",
        stateName: "shipModeList",
        multi: false,
        state: twShoppingCartStateName.delivery,
        async: false,
    },
    {
        columnName: "GARMENT PART",
        stateName: "garmentPartList",
        multi: false,
        state: twShoppingCartStateName.delivery,
        async: false,
    },
    {
        columnName: "FABRIC FINISHING",
        stateName: "finishingList",
        multi: true,
        state: twShoppingCartStateName.product,
        async: false,
    },
    {
        columnName: "GARMENT WASH TYPE",
        stateName: "washTypeList",
        multi: false,
        state: twShoppingCartStateName.delivery,
        async: false,
    },
]

export const handsonTableHeader = {
    "columns": [
        {
            "data": "check",
            "type": "checkbox",
        }, {
            "data": "group",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "item",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "combo",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "hlNo",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "status",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "completionDate",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "expectDeliveryDate",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "deliveryDate",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "remark",
            "type": "text",
            "readOnly": true,
        },
    ],
    "colHeaders": [
        "",
        "GROUP",
        "ITEM",
        "COMBO",
        "HL NO.",
        "STATUS",
        "COMPLETION DATE",
        "EXPECTED DELIVERY DATE",
        "ACTUAL DELIVERY DATE",
        "REMARK",
    ]
}

export const handsonTableTWHeader = {
    "columns": [
        {
            "data": "check",
            "type": "checkbox",
        }, {
            "data": "group",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "item",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "combo",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "ppoNo",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "factoryNo",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "status",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "completionDate",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "fabricDeliveryDate",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "lotNo",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "destination",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "shipMode",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "quantity",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "shippedQty",
            "type": "text",
            "readOnly": true,
        }, {
            "data": "remark",
            "type": "text",
            "readOnly": true,
        },
    ],
    "colHeaders": [
        "",
        "GROUP",
        "ITEM",
        "COMBO",
        "PPO NO.",
        "GF NO.",
        "STATUS",
        "COMPLETION DATE",
        "FABRIC DELIVERY<br>DATE",
        "LOT NO.",
        "DESTINATION",
        "SHIP MODE",
        "REQUESTED<br>QTY",
        "ACTUAL DELIVERY<br>QTY",
        "REMARK",
    ]
}

export const seasonsDict = {
    'S': 'Spring',
    'F': 'Fall'
}

export const garmentPartMaster = [
    { value: 'BD', label: 'BODY' },
    { value: 'M1', label: 'TRIM FAB1' },
    { value: 'M2', label: 'TRIM FAB2' },
    { value: 'M3', label: 'TRIM FAB3' },
    { value: 'M4', label: 'TRIM FAB4' },
    { value: 'M5', label: 'TRIM FAB5' },
    { value: 'M6', label: 'TRIM FAB6' },
    { value: 'M7', label: 'TRIM FAB7' },
    { value: 'M8', label: 'TRIM FAB8' },
    { value: 'M9', label: 'TRIM FAB9' },
    { value: 'M10', label: 'TRIM10' },
    { value: 'MA', label: 'TRIM FAB10' },
    { value: 'MB', label: 'TRIM FAB11' },
    { value: 'MC', label: 'TRIM FAB12' },
]

export const fcrGarmentFtyMasterData = [
    { value: 'Y', label: 'TIL' },
    { value: 'N', label: 'OTHER' },
]

export const SHOPPINGCART_SHEETS = [
    { value: 'handloom', text: 'HandLoom' },
    { value: 'trialWeave', text: 'Trial Weave' },
    { value: 'fabricCodeRequisition', text: 'Fabric Code Requisition' },
]

export const JOASSIGN_SHEETS = [
    { value: 'collaboration', text: 'COLLABORATION' },
    { value: 'assignment', text: 'ASSIGNMENT' },
]

export const JOASSIGN_BREADCRUMB = [...BASE_BREADCRUMB, 'Assignment']

export const SHOPPINGCART_HANDLOOM_BREADCRUMB = [...BASE_BREADCRUMB, 'ShoppingCart', 'Handloom']

export const SHOPPINGCART_TRIALWEAVE_BREADCRUMB = [...BASE_BREADCRUMB, 'ShoppingCart', 'TrialWeave']

export const SHOPPINGCART_FCR_BREADCRUMB = [...BASE_BREADCRUMB, 'ShoppingCart', 'FCR']

export const fcrSheets = [
    { value: 'new', text: 'NEW' },
    { value: 'rejected', text: 'REJECTED' },
]

export const dateColumns = [
    'Expected Delivery Date',
    'HL Ready date',
]

export const shoppingCartFCRNewMasterColumns = [
    {
        columnName: "GARMENT FTY",
        stateName: "fcrGarmentFtyList",
        multi: false,
        async: false,
    },
    {
        columnName: "GARMENT FEATURE",
        stateName: "garmentFeatureList",
        multi: false,
        async: false,
    },
    {
        columnName: "FABRIC FINISHING",
        stateName: "finishingList",
        multi: true,
        async: false,
    },
    {
        columnName: "GARMENT WASH TYPE",
        stateName: "washTypeList",
        multi: false,
        async: false,
    },
]

export const fcrIssueRequiredColumns = {
    '_combo': 'COMBO',
    '_millRefNo': 'MILL REF NO.',
    '_dyeMethod': 'DYE METHOD',
    '_fabrication': 'FABRICATION',
    '_construction': 'CONSTRUCTION',
    '_fabricFinishing': 'FABRIC FINISHING',
    '_handfeelStandard': 'HANDFEEL STANDARD',
    '_fabricWidth': 'FABRIC WIDTH',
    '_garmentWashType': 'GARMENT WASH TYPE',
    '_referenceWashNo': 'REFERENCE WASH No.',
    '_garmentFeature': 'GARMENT FEATURE',
    '_garmentFty': 'GARMENT FTY',
    '_finishingDesc': 'FABRIC FINISHING',
    '_garmentWashTypeDesc': 'GARMENT WASH TYPE',
}

export const fcrNewFileContentHeader1 = {
    header: {
        colHeaders: [
            '',
            'GROUP',
            'ITEM',
            'COMBO',
            'MILL REF NO.',
            'FABRICATION',
            'CONSTRUCTION',
            'FABRIC FINISHING',
            'HANDFEEL STANDARD',
            'DYE METHOD',
            'FABRIC WIDTH',
            'GARMENT WASH TYPE',
            'REFERENCE WASH No.',
        ],
        columns: [
            { data: '_checkBox.value', type: 'checkbox' },
            { data: '_group.value', type: 'text' },
            { data: '_item.value', type: 'text' },
            { data: '_combo.value', type: 'text' },
            { data: '_millRefNo.value', type: 'text' },
            { data: '_fabrication.value', type: 'text' },
            { data: '_construction.value', type: 'text' },
            { data: '_fabricFinishing.value', type: 'text' },
            { data: '_handfeelStandard.value', type: 'text' },
            { data: '_dyeMethod.value', type: 'text' },
            { data: '_fabricWidth.value', type: 'text' },
            { data: '_garmentWashType.value', type: 'text' },
            { data: '_referenceWashNo.value', type: 'text' },
        ],
    }
}

export const fcrNewFileContentHeader2 = {
    header: {
        colHeaders: [
            'GROUP',
            'ITEM',
            'COMBO',
            'MILL REF NO.',
            'HL APPROVAL COMMENTS',
            'PRINT',
            'DTM TO',
            'GARMENT FEATURE',
            'GARMENT FTY',
            'AGOA TYPE',
            'ORDER ABOVE 3000YDS',
            'REMARK',
        ],
        columns: [
            { data: '_group.value', type: 'text' },
            { data: '_item.value', type: 'text' },
            { data: '_combo.value', type: 'text' },
            { data: '_millRefNo.value', type: 'text' },
            { data: '_hlApprovalComments.value', type: 'text' },
            { data: '_print.value', type: 'checkbox' },
            { data: '_dtmTo.value', type: 'text' },
            { data: '_garmentFeature.value', type: 'text' },
            { data: '_garmentFty.value', type: 'text' },
            { data: '_agoaType.value', type: 'text' },
            { data: '_orderAbove3000.value', type: 'checkbox' },
            { data: '_remark.value', type: 'text' },
        ],
    }
}

export const fabricItemSearchResultPageSize = 13

export const fabricItemSearchCondition = [
    { value: '', label: 'ALL' },
    { value: 'HL', label: 'Handloom' },
    { value: 'TW', label: 'Trial Weave' },
    { value: 'FCR', label: 'Fabric Code Requisition' },
]

export const WMIS_MILLREFNO_DOC_MAPPING_RULE = {
    FABRICTYPE: 'Fabrication',
    CONSTRUCTION: 'Construction',
    FINISHINGCODE: 'Fabric Finishing',
    HANDFEELREF: 'Handfeel Standard',
    COMPOSITION: 'Composition',
    DYEMETHOD: 'Dye Method',
    FABRICWIDTH: 'fabricWidth',
    REFERENCEDOCTYPE: 'referenceDocType',
    DETAILID: 'refId',
}

export const fabticItemDetailApproveAction = [
    { value: '', text: '' },
    { value: '0', text: 'APPROVED' },
    { value: '1', text: 'PATTERN ONLY' },
    { value: '2', text: 'COLOR ONLY' },
]

export const FINISHINGSTANDARD_FINISH_IDEN = ['5', '6', '7', '8', '10', '13', '14', '16', '36', '40', '115', '116', '170', '172']

export const NEWHANDLOOM_MANDATORY_FIELD = [
    '_year',
    '_season',
    'customerCode',
    'brandCode',
    'Combo',
    'Pattern Reference',
    'Fabrication',
    'Construction',
    'Fabric Finishing',
    'Color Reference',
    'Reference Weaving',
    'Handfeel Standard',
]

export const NEWTRIALWEAVE_MANDATORY_FIELD = [
    '_year',
    '_season',
    'customerCode',
    'brandCode',
    'Combo',
]

export const loadTapOptionsDelayTime = 1000

export const INIT_JOASSIGN_FILE_HEADER = fromJS({
    "header": {
        "columns": [
            {
                "data": "assignCheckBox.value",
                "type": "checkbox",
            }, {
                "data": "_jo.value",
                "type": "text",
            }, {
                "data": "Group.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Item.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Combo.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Pattern Reference.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Dye Method.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Fabrication.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Composition.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Construction.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Fabric Finishing.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Finishing Standard.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Color Reference.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Reference Weaving.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "Handfeel Standard.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "_remark.value",
                "type": "text",
                "readOnly": true,
            }, {
                "data": "_deliveryDate.value",
                "type": "text",
                "readOnly": true,
            }
        ],
        "colHeaders": [
            "",
            "JO",
            "Group",
            "Item",
            "Combo",
            "Pattern Reference",
            "Dye Method",
            "Fabrication",
            "Composition",
            "Construction",
            "Fabric Finishing",
            "Finishing Standard",
            "Color Reference",
            "Reference Weaving",
            "Handfeel Standard",
            "Remark",
            "Expect Delivery Date",
        ]
    }
})
