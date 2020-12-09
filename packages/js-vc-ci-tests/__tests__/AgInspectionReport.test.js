const fs = require('fs');
const path = require('path');
const issuer = require('../services/issuer');

it('can issue / verify AgInspectionReport', async () => {
    const { verified, verifiableCredential } = await issuer.issue({
        credentialSubject: {
            id: 'did:example:123',
            type: "AgInspectionReport",
            type: "AgInspectionReport",
            facility: {
                type: "Place",
                globalLocationNumber: "5094112557724",
                geo: {
                    type: "GeoCoordinates",
                    latitude: "6.9367",
                    longitude: "70.2528"
                },
                address: {
                    type: "PostalAddress",
                    organizationName: "Swift - Larkin",
                    streetAddress: "1167 Nelle Wells",
                    addressLocality: "Caroleville",
                    addressRegion: "North Carolina",
                    postalCode: "17085-4582",
                    addressCountry: "Puerto Rico"
                }
            },
            inspector: {
                type: "Inspector",
                person: {
                    type: "Person",
                    firstName: "Sofia",
                    lastName: "Runolfsdottir",
                    email: "Edgardo17@hotmail.com",
                    phoneNumber: "(874) 571-1664 x187",
                    worksFor: {
                        type: "Organization",
                        name: "Conroy, Herman and Kreiger",
                        description: "Quality-focused bifurcated moratorium",
                        address: {
                            type: "PostalAddress",
                            streetAddress: "066 Rahul Squares",
                            addressLocality: "D'Amorefurt",
                            addressRegion: "Delaware",
                            postalCode: "16365-8130",
                            addressCountry: "Croatia"
                        },
                        email: "Elinor64@gmail.com",
                        phoneNumber: "(501) 413-3480 x274"
                    },
                    jobTitle: "Direct Mobility Officer"
                },
                credential: [
                    {
                        type: "Credential",
                        credentialCategory: "District Infrastructure Specialist",
                        credentialValue: "Agent"
                    },
                    {
                        type: "Credential",
                        credentialCategory: "National Implementation Coordinator",
                        credentialValue: "Technician"
                    }
                ]
            },
            shipment: {
                type: "ParcelDelivery",
                deliveryAddress: {
                    type: "PostalAddress",
                    organizationName: "Ortiz, Pouros and Steuber",
                    streetAddress: "0553 Xander Parkway",
                    addressLocality: "South Skye",
                    addressRegion: "Connecticut",
                    postalCode: "86326",
                    addressCountry: "Iraq"
                },
                originAddress: {
                    type: "PostalAddress",
                    organizationName: "Boyle, Hane and Corkery",
                    streetAddress: "987 Cameron Valley",
                    addressLocality: "New Electaburgh",
                    addressRegion: "Nevada",
                    postalCode: "48332-0620",
                    addressCountry: "Gibraltar"
                },
                trackingNumber: "503164088156",
                products: [
                    {
                        type: "Product",
                        manufacturer: {
                            type: "Organization",
                            name: "Heaney - Grady",
                            description: "Reverse-engineered client-driven matrix",
                            address: {
                                type: "PostalAddress",
                                streetAddress: "1870 Hintz Terrace",
                                addressLocality: "South Abbey",
                                addressRegion: "Iowa",
                                postalCode: "42210",
                                addressCountry: "Republic of Korea"
                            },
                            email: "Brock.Hartmann82@yahoo.com",
                            phoneNumber: "461-525-5187 x42208"
                        },
                        name: "Small Plastic Bacon",
                        description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
                        sizeOrAmount: {
                            type: "QuantitativeValue",
                            unitCode: "hg/ha",
                            value: "6178"
                        },
                        weight: {
                            type: "QuantitativeValue",
                            unitCode: "hg/ha",
                            value: "5960"
                        },
                        sku: "88259203676"
                    }
                ]
            },
            applicant: {
                type: "Person",
                firstName: "Jaylon",
                lastName: "Bradtke",
                email: "Zane_Pollich39@yahoo.com",
                phoneNumber: "847-262-8755",
                worksFor: {
                    type: "Organization",
                    name: "Gaylord, Brown and Kunde",
                    description: "Persevering interactive protocol",
                    address: {
                        type: "PostalAddress",
                        streetAddress: "657 Beverly Hills",
                        addressLocality: "Rogahnfurt",
                        addressRegion: "New Mexico",
                        postalCode: "73208",
                        addressCountry: "Iran"
                    },
                    email: "Jana_Hagenes@gmail.com",
                    phoneNumber: "1-731-783-9434 x174"
                },
                jobTitle: "Central Paradigm Facilitator"
            },
            inspectionDate: "11-2-2020",
            inspectionType: "Phytosanitary",
            observation: [
                {
                    type: "Observation",
                    property: {
                        type: "ChemicalProperty",
                        name: "Ruthenium",
                        formula: "Ru",
                        inchi: "InChI=1S/Ru",
                        inchikey: "KJTLSVCANCCWHF-UHFFFAOYSA-N"
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "88.180",
                        unitCode: "P1"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "ChemicalProperty",
                        name: "Lawrencium",
                        formula: "Lr",
                        inchi: "InChI=1S/Lr",
                        inchikey: "CNQCVBJFEGMYDW-UHFFFAOYSA-N"
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "11.820",
                        unitCode: "P1"
                    }
                }
            ]

        }
    }, [
        'https://www.w3.org/2018/credentials/v1',
        'https://w3id.org/traceability/v1',
    ]);
    expect(verified).toBe(true);
    fs.writeFileSync(path.resolve(__dirname, '../../../docs/credentials/AgInspectionReport.json'), JSON.stringify(verifiableCredential, null, 2));
});
