package main

// Getty Images Data Structure
// json
type GettyImagesResults  struct {
    ResultCount int `json:"result_count"`
    Images []GettyImage `json:"images"`
}
type GettyImage struct {
    Id string `json:"id"`
    DateCreated string `json:"date_created"`
    DisplaySizes []GettyDisplaySize `json:"display_sizes"`
    ReferralDestinations [] ReferralDestination `json:"referral_destinations"`
}
type GettyDisplaySize struct {
    Uri string `json:"uri"`
}
type ReferralDestination struct {
    SiteName string `json:"site_name"`
    Url string `json:"uri"`
}

// Shutterstock
// json
type ShutterstockResults struct {
    TotalCount int `json:"total_count"`
    Images []ShutterstockImage `json:"data"`
}
type ShutterstockImage struct {
    Id string `json:"id"`
    AddedDate string `json:"added_date"`
}

// 123rf.com
// xml
type One23rfResults struct {
    Images []One23rfResultsAttr `xml:"images>image"`
}
type One23rfResultsAttr struct {
    Id string `xml:"id,attr"`
    ContributorId string `xml:"contributorid,attr"`
    Folder string `xml:"folder,attr"`
    Filename string `xml:"filename,attr"`
}