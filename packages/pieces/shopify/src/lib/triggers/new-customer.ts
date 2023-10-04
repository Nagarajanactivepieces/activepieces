import { createShopifyWebhookTrigger } from "../common/register-webhook";


export const newCustomer = createShopifyWebhookTrigger(  {
    name: "new_customer",
    description: "Triggered when a new customer is created",
    topic: "customers/create",
    displayName: "New Customer",
    sampleData: {
        "id": 6972943892790,
        "email": "john@activepieces.com",
        "accepts_marketing": false,
        "created_at": "2023-03-24T18:13:56-04:00",
        "updated_at": "2023-03-24T18:13:56-04:00",
        "first_name": "John",
        "last_name": "Doe",
        "orders_count": 0,
        "state": "disabled",
        "total_spent": "0.00",
        "last_order_id": null,
        "note": "Some notes",
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "tags": "tag, VIP",
        "last_order_name": null,
        "currency": "USD",
        "addresses": [
            {
                "id": 9218699002161,
                "customer_id": 6972943892790,
                "first_name": "John",
                "last_name": "Doe",
                "company": "Company Name",
                "address1": "Delaware",
                "address2": "11, test",
                "city": "Calforina",
                "province": "Delaware",
                "country": "United States",
                "zip": "19931",
                "name": "Mohammad AbuAboud",
                "province_code": "DE",
                "country_code": "US",
                "country_name": "United States",
                "default": true
            }
        ],
        "accepts_marketing_updated_at": "2023-03-24T18:13:56-04:00",
        "marketing_opt_in_level": null,
        "tax_exemptions": [],
        "email_marketing_consent": {
            "state": "not_subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": null
        },
        "sms_marketing_consent": {
            "state": "not_subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": null,
            "consent_collected_from": "SHOPIFY"
        },
        "admin_graphql_api_id": "gid://shopify/Customer/6972943892790",
        "default_address": {
            "id": 9218699002166,
            "customer_id": 6972943892790,
            "first_name": "Mohammad",
            "last_name": "AbuAboud",
            "company": "Company Name",
            "address1": "Delaware",
            "address2": "11, test",
            "city": "Calforina",
            "province": "Delaware",
            "country": "United States",
            "zip": "19931",
            "name": "Mohammad AbuAboud",
            "province_code": "DE",
            "country_code": "US",
            "country_name": "United States",
            "default": true
        }
    }
});