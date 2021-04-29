import { GenericQueueDefinition } from "./GenericQueueDefinition";

export class LeadQueueDefinition extends GenericQueueDefinition{
    _searchSchema =  {
						"leadName": {
							"title": "LEAD_NAME",
							"type": "string"
						},
						"businessName": {
							"title": "BUSINESS_NAME",
							"type": "string"
						},
						"area": {
							"title": "AREA",
							"type": "string"
						},
						"cityTownVillage": {
							"title": "CITY/_TOWN_VILLAGE",
							"type": "string"
						}
					};
}