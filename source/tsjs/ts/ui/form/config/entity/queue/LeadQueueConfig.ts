import {GenericQueueConfig } from "./GenericQueueConfig";

export class LeadQueueConfig extends GenericQueueConfig {
    public filters: Object = [
        "leadName",
        "businessName",
        "area",
        "cityTownVillage"
    ];
    public columns: Object = [
        {
            title: 'ID',
            data: 'id',
            name:'ID'
        }, {
            title: 'Lead Name',
            data: 'leadName',
            name : "Lead Name"
        }, {
            name : "Business Name",
            title: 'Business Name',
            data: 'businessName'
        }, {
            name : "Address Line1",
            title: 'Address Line1',
            data: 'addressLine1'
        }, {
            name: 'City Town Village',
            title: 'CityTownVillage',
            data: 'cityTownVillage'
        }, {
            name: 'Area',
            title: 'Area',
            data: 'area'
        }, {
            name: 'Spoke',
            title: 'Spoke',
            data: 'centreId'
        }, {
            name: 'Pincode',
            title: 'Pincode',
            data: 'pincode'
        }, {
            name: 'Mobile No',
            title: 'Mobile No',
            data: 'mobileNo'
        }
    ]
}