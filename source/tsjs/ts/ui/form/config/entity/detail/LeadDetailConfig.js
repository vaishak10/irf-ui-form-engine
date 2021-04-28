var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./GenericDetailConfig"], function (require, exports, GenericDetailConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LeadDetailConfig = void 0;
    var LeadDetailConfig = /** @class */ (function (_super) {
        __extends(LeadDetailConfig, _super);
        function LeadDetailConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.processJson = {
                "leadProfile": {
                    "type": "box",
                    "title": "LEAD_PROFILE",
                    "items": {
                        "branchName": {
                            "key": "lead.branchName",
                            "type": "select",
                            "readonly": true
                        },
                        "branchId": {
                            "key": "lead.branchId",
                            "type": "select",
                            "readonly": true
                        },
                        "centreId": {
                            "key": "lead.centreId",
                            "type": "select",
                            "parentEnumCode": "branch",
                            "parentValueExpr": "model.lead.branchId",
                            "screenFilter": true
                        },
                        "ID": {
                            "key": "lead.id",
                            "condition": "model.lead.id",
                            "readonly": true
                        },
                        "urnNo": {
                            "key": "lead.urnNo",
                            "condition": "model.lead.urnNo",
                            "readonly": true
                        },
                        "leadDetails": {
                            "type": "fieldset",
                            "title": "LEAD_DETAILS",
                            "items": {
                                "customerTypeString": {
                                    "key": "lead.customerTypeString",
                                    "type": "select",
                                    "titleMap": {
                                        "Individual": "Individual",
                                        "Enterprise": "Individual and Enterprise"
                                    },
                                    "readonly": true
                                },
                                "enterpriseDetails": {
                                    "type": "fieldset",
                                    "title": "ENTERPRISE_DETAILS",
                                    "condition": "model.lead.customerTypeString === 'Enterprise'",
                                    "items": {
                                        "businessName": {
                                            "key": "lead.businessName",
                                            "required": false
                                        },
                                        "companyRegistered": {
                                            "key": "lead.companyRegistered",
                                            "type": "radios",
                                            "enumCode": "decisionmaker"
                                        },
                                        "businessType": {
                                            "key": "lead.businessType",
                                            "required": false,
                                            "type": "select",
                                            "enumCode": "businessType"
                                        },
                                        "businessActivity": {
                                            "key": "lead.businessActivity",
                                            "required": false,
                                            "type": "select",
                                            "enumCode": "businessActivity",
                                            "parentEnumCode": "businessType"
                                        },
                                        "companyOperatingSince": {
                                            "key": "lead.companyOperatingSince",
                                            "type": "date"
                                        },
                                        "ownership": {
                                            "key": "lead.ownership",
                                            "type": "select",
                                            "enumCode": "ownership"
                                        },
                                        "individualDetails": {
                                            "type": "fieldset",
                                            "title": "INDIVIDUAL_DETAILS",
                                            "items": {
                                                "gender": {
                                                    "key": "lead.gender",
                                                    "type": "radios"
                                                },
                                                "dob": {
                                                    "key": "lead.dob",
                                                    "type": "date"
                                                },
                                                "age": {
                                                    "key": "lead.age",
                                                    "type": "number"
                                                },
                                                "maritalStatus": {
                                                    "key": "lead.maritalStatus",
                                                    "type": "select",
                                                    "enumCode": "marital_status"
                                                },
                                                "educationStatus": {
                                                    "key": "lead.educationStatus",
                                                    "type": "select",
                                                    "enumCode": "education",
                                                    "required": true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "individualDetails": {
                            "type": "fieldset",
                            "title": "INDIVIDUAL_DETAILS",
                            "items": {
                                "leadName": {
                                    "key": "lead.leadName",
                                    "title": "APPLICANT_NAME",
                                    "schema": {
                                        "pattern": "^[a-zA-Z\\. ]+$"
                                    },
                                    "orderNo": 10,
                                    "validationMessage": {
                                        "202": "Only alphabets and space are allowed."
                                    }
                                },
                                "existingApplicant": {
                                    "key": "lead.applicantCustomerId",
                                    "title": "CHOOSE_EXISTING_APPLICANT",
                                    "type": "lov",
                                    "orderNo": 5,
                                    "lovonly": true,
                                    "inputMap": {
                                        "firstName": {
                                            "key": "lead.customerFirstName"
                                        },
                                        "urnNo": {
                                            "key": "lead.urnNo"
                                        },
                                        "branchId": {
                                            "key": "lead.branchId",
                                            "type": "select",
                                            "screenFilter": true,
                                            "readonly": true
                                        },
                                        "centreId1": {
                                            "key": "lead.centreId",
                                            "condition": "model.globalSettings.allowCrossCentreBooking == 'Y'",
                                            "type": "select",
                                            "enumCode": "centre",
                                            "parentEnumCode": "branch",
                                            "parentValueExpr": "model.branchId"
                                        },
                                        "centreId2": {
                                            "key": "lead.centreId",
                                            "condition": "model.globalSettings.allowCrossCentreBooking == 'N'",
                                            "type": "select",
                                            "enumCode": "usercentre"
                                        }
                                    },
                                    "searchHelper": "formHelper"
                                },
                                "gender": {
                                    "key": "lead.gender",
                                    "type": "radios"
                                },
                                "dob": {
                                    "key": "lead.dob",
                                    "type": "date"
                                },
                                "age": {
                                    "key": "lead.age",
                                    "type": "number"
                                },
                                "maritalStatus": {
                                    "key": "lead.maritalStatus",
                                    "type": "select",
                                    "enumCode": "marital_status"
                                },
                                "educationStatus": {
                                    "key": "lead.educationStatus",
                                    "type": "select",
                                    "enumCode": "education"
                                },
                                "occupation1": {
                                    "key": "lead.occupation1",
                                    "type": "select",
                                    "enumCode": "lead_primary_occupation"
                                },
                                "leadCategory": {
                                    "key": "lead.leadCategory",
                                    "type": "select",
                                    "enumCode": "lead_category",
                                    "required": "true"
                                },
                                "licenseType": {
                                    "key": "lead.licenseType",
                                    "type": "select",
                                    "enumCode": "licence_type"
                                }
                            }
                        },
                        "contactDetails": {
                            "type": "fieldset",
                            "title": "CONTACT_DETAILS",
                            "condition": "model.lead.customerTypeString === 'Individual'||model.lead.customerTypeString === 'Enterprise'",
                            "items": {
                                "mobileNo": {
                                    "key": "lead.mobileNo",
                                    "orderNo": 10
                                },
                                "alternateMobileNo": {
                                    "key": "lead.alternateMobileNo",
                                    "orderNo": 20
                                },
                                "addressLine1": {
                                    "key": "lead.addressLine1",
                                    "title": "DOOR_NO",
                                    "orderNo": 40
                                },
                                "addressLine2": {
                                    "key": "lead.addressLine2",
                                    "title": "STREET",
                                    "orderNo": 50
                                },
                                "location": {
                                    "key": "lead.location",
                                    "type": "geotag",
                                    "latitude": "lead.latitude",
                                    "longitude": "lead.longitude",
                                    "orderNo": 30
                                },
                                "postOffice": {
                                    "key": "lead.postOffice",
                                    "title": "POST_OFFICE",
                                    "orderNo": 60
                                },
                                "landmark": {
                                    "key": "lead.landmark",
                                    "title": "LANDMARK",
                                    "orderNo": 70
                                },
                                "pincode": {
                                    "key": "lead.pincode",
                                    "type": "lov",
                                    "fieldType": "number",
                                    "orderNo": 80,
                                    "resolver": "PincodeLOVConfiguration"
                                },
                                "area": {
                                    "key": "lead.area",
                                    "readonly": true,
                                    "orderNo": 90
                                },
                                "cityTownVillage": {
                                    "key": "lead.cityTownVillage",
                                    "readonly": true,
                                    "orderNo": 100
                                },
                                "district": {
                                    "key": "lead.district",
                                    "readonly": true,
                                    "orderNo": 110
                                },
                                "state": {
                                    "key": "lead.state",
                                    "readonly": true,
                                    "orderNo": 120
                                }
                            }
                        }
                    }
                },
                "sourceDetails": {
                    "type": "box",
                    "title": "SOURCE_DETAILS",
                    "items": {
                        "leadSource": {
                            "key": "lead.leadSource",
                            "type": "select",
                            "enumCode": "lead_source"
                        },
                        "referredBy1": {
                            "key": "lead.referredBy",
                            "condition": "model.lead.leadSource.toUpperCase() == 'EXISTING CUSTOMER REFERRAL' && model.siteCode != 'witfin'",
                            "type": "lov",
                            "lovonly": true,
                            "inputMap": {
                                "firstName": {
                                    "key": "lead.customerFirstName"
                                },
                                "urnNo": {
                                    "key": "lead.urnNo"
                                },
                                "branchId": {
                                    "key": "lead.branchId",
                                    "type": "select",
                                    "screenFilter": true,
                                    "readonly": true
                                },
                                "centreName": {
                                    "key": "lead.centreName",
                                    "type": "string",
                                    "readonly": true
                                },
                                "centreId": {
                                    "key": "lead.centreId",
                                    "type": "lov",
                                    "autolov": true,
                                    "lovonly": true,
                                    "bindMap": {},
                                    "searchHelper": "formHelper"
                                }
                            },
                            "outputMap": {
                                "firstName": "lead.referredBy"
                            },
                            "searchHelper": "formHelper"
                        },
                        "referredBy2": {
                            "key": "lead.referredBy",
                            "condition": "model.lead.leadSource.toUpperCase() == 'EXISTING CUSTOMER REFERRAL' && model.siteCode == 'witfin'",
                            "type": "lov",
                            "lovonly": true,
                            "inputMap": {
                                "firstName": {
                                    "key": "lead.customerFirstName"
                                },
                                "urnNo": {
                                    "key": "lead.urnNo"
                                },
                                "branchId": {
                                    "key": "lead.branchId",
                                    "type": "select",
                                    "screenFilter": true
                                },
                                "centreName": {
                                    "key": "lead.centreName",
                                    "type": "string"
                                },
                                "centreId": {
                                    "key": "lead.centreId",
                                    "type": "select",
                                    "title": "CENTRE_NAME",
                                    "filter": {
                                        "parentCode": "branch_id"
                                    },
                                    "parentEnumCode": "branch_id",
                                    "parentValueExpr": "lead.branchId"
                                }
                            },
                            "outputMap": {
                                "firstName": "lead.referredBy"
                            },
                            "searchHelper": "formHelper"
                        },
                        "referredBy": {
                            "key": "lead.referredBy",
                            "condition": "model.lead.leadSource.toUpperCase() == 'EMPLOYEE REFERRAL'",
                            "type": "lov",
                            "lovonly": true,
                            "inputMap": {
                                "branchName": {
                                    "key": "lead.branchName",
                                    "screenFilter": true,
                                    "type": "select"
                                },
                                "userName": {
                                    "key": "lead.userName"
                                },
                                "login": {
                                    "key": "lead.login"
                                },
                                "partnerCode": {
                                    "key": "lead.partnerCode"
                                }
                            },
                            "searchHelper": "formHelper"
                        },
                        "agentName": {
                            "key": "lead.agentName",
                            "type": "select"
                        }
                    }
                },
                "productDetails": {
                    "type": "box",
                    "title": "PRODUCT_DETAILS",
                    "items": {
                        "interestedInProduct": {
                            "key": "lead.interestedInProduct",
                            "title": "INTERESTED_IN_LOAN_PRODUCT",
                            "type": "select",
                            "required": true,
                            "enumCode": "decisionmaker"
                        },
                        "loanAmountRequested": {
                            "key": "lead.loanAmountRequested",
                            "condition": "model.lead.interestedInProduct==='YES'"
                        },
                        "loanPurpose1": {
                            "key": "lead.loanPurpose1",
                            "condition": "model.lead.interestedInProduct==='YES'&& model.lead.productSubCategory !== 'investment'",
                            "type": "select",
                            "enumCode": "loan_purpose_1"
                        },
                        "loanPurpose2": {
                            "key": "lead.loanPurpose2",
                            "condition": "model.lead.interestedInProduct==='YES'",
                            "type": "select",
                            "enumCode": "loan_purpose_2",
                            "parentEnumCode": "loan_purpose_1",
                            "parentValueExpr": "model.lead.loanPurpose1"
                        },
                        "productRequiredBy": {
                            "key": "lead.productRequiredBy",
                            "type": "select",
                            "condition": "model.lead.interestedInProduct==='YES'",
                            "enumCode": "lead_product_required_by",
                            "onChange": "actions.changeStatus(modelValue, form, model)"
                        },
                        "screeningDate": {
                            "key": "lead.screeningDate",
                            "type": "date"
                        },
                        "followUpDate": {
                            "key": "lead.followUpDate",
                            "type": "date"
                        },
                        "productEligibility": {
                            "type": "fieldset",
                            "condition": "model.lead.interestedInProduct==='YES'",
                            "title": "PRODUCT_ELIGIBILITY",
                            "items": {
                                "eligibleForProduct": {
                                    "key": "lead.eligibleForProduct",
                                    "type": "radios",
                                    "enumCode": "decisionmaker",
                                    "onChange": "actions.changeStatus(modelValue, form, model)"
                                }
                            }
                        },
                        "productRejectionReason": {
                            "type": "fieldset",
                            "title": "PRODUCT_REJECTION_REASON",
                            "condition": "model.lead.interestedInProduct==='NO'||model.lead.eligibleForProduct ==='NO'",
                            "items": {
                                "productRejectReason": {
                                    "key": "lead.productRejectReason",
                                    "type": "select",
                                    "condition": "model.lead.eligibleForProduct ==='NO'",
                                    "enumCode": "lead_reject_reason"
                                },
                                "productRejectAdditinalRemarks": {
                                    "key": "lead.productRejectAdditinalRemarks",
                                    "title": "REMARKS"
                                }
                            }
                        },
                        "leadStatus": {
                            "type": "fieldset",
                            "title": "LEAD_STATUS",
                            "items": {
                                "leadStatus": {
                                    "key": "lead.leadStatus",
                                    "readonly": true,
                                    "onChange": "actions.changeStatus(modelValue, form, model)"
                                }
                            }
                        }
                    }
                },
                "previousInteractions": {
                    "type": "box",
                    "title": "PREVIOUS_INTERACTIONS",
                    "condition": "model.lead.id && model.lead.currentStage == 'Inprocess'",
                    "items": {
                        "leadInteractions1": {
                            "key": "lead.leadInteractions1",
                            "type": "array",
                            "add": null,
                            "remove": null,
                            "title": "Interaction History",
                            "items": {
                                "interactionDate": {
                                    "key": "lead.leadInteractions1[].interactionDate",
                                    "type": "date",
                                    "readonly": true
                                },
                                "loanOfficerId": {
                                    "key": "lead.leadInteractions1[].loanOfficerId",
                                    "readonly": true
                                },
                                "typeOfInteraction": {
                                    "key": "lead.leadInteractions1[].typeOfInteraction",
                                    "type": "select",
                                    "readonly": true,
                                    "titleMap": {
                                        "Call": "Call",
                                        "Visit": "Visit"
                                    }
                                },
                                "customerResponse": {
                                    "key": "lead.leadInteractions1[].customerResponse",
                                    "readonly": true
                                },
                                "additionalRemarks": {
                                    "key": "lead.leadInteractions1[].additionalRemarks",
                                    "readonly": true
                                },
                                "location": {
                                    "key": "lead.leadInteractions1[].location",
                                    "readonly": true,
                                    "type": "geotag",
                                    "latitude": "latitude",
                                    "longitude": "longitude",
                                    "condition": "model.lead.leadInteractions1[arrayIndex].typeOfInteraction == 'Visit'"
                                },
                                "picture": {
                                    "key": "lead.leadInteractions1[].picture",
                                    "readonly": true,
                                    "type": "file",
                                    "fileType": "image/*",
                                    "condition": "model.lead.leadInteractions1[arrayIndex].typeOfInteraction === 'Visit'"
                                }
                            }
                        }
                    }
                },
                "leadInteractions": {
                    "type": "box",
                    "title": "LEAD_INTERACTIONS",
                    "items": {
                        "leadInteractions": {
                            "key": "lead.leadInteractions",
                            "type": "array",
                            "startEmpty": true,
                            "add": null,
                            "remove": null,
                            "view": "fixed",
                            "title": "LEAD_INTERACTIONS",
                            "items": {
                                "interactionDate": {
                                    "key": "lead.leadInteractions[].interactionDate",
                                    "type": "date",
                                    "readonly": true
                                },
                                "loanOfficerId": {
                                    "key": "lead.leadInteractions[].loanOfficerId",
                                    "readonly": true
                                },
                                "typeOfInteraction": {
                                    "key": "lead.leadInteractions[].typeOfInteraction",
                                    "type": "select",
                                    "titleMap": {
                                        "Call": "Call",
                                        "Visit": "Visit"
                                    }
                                },
                                "customerResponse": {
                                    "key": "lead.leadInteractions[].customerResponse",
                                    "type": "select",
                                    "enumCode": "li_customer_response"
                                },
                                "additionalRemarks": {
                                    "key": "lead.leadInteractions[].additionalRemarks",
                                    "type": "text"
                                },
                                "location": {
                                    "key": "lead.leadInteractions[].location",
                                    "type": "geotag",
                                    "latitude": "latitude",
                                    "longitude": "longitude",
                                    "condition": "model.lead.leadInteractions[arrayIndex].typeOfInteraction == 'Visit'"
                                },
                                "picture": {
                                    "key": "lead.leadInteractions[].picture",
                                    "type": "file",
                                    "fileType": "image/*",
                                    "condition": "model.lead.leadInteractions[arrayIndex].typeOfInteraction === 'Visit'"
                                }
                            }
                        }
                    }
                },
                "actionbox": {
                    "type": "actionbox",
                    "items": {
                        "save": {
                            "type": "save",
                            "title": "Offline Save"
                        },
                        "submit": {
                            "type": "submit",
                            "title": "Submit"
                        }
                    }
                }
            };
            return _this;
        }
        return LeadDetailConfig;
    }(GenericDetailConfig_1.GenericDetailConfig));
    exports.LeadDetailConfig = LeadDetailConfig;
});
