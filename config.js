/* ===================================================================
   Bhagirathi Diagnostic & Health Care — App Configuration
   Edit the values below to change credentials, work location or the
   allowed punch-in radius. Nothing else in the app needs to change.
   =================================================================== */
window.APP_CONFIG = {
  APP_NAME: "Bhagirathi Diagnostic and Health Care",
  APP_SHORT_NAME: "Bhagirathi",

  // Supabase project
  SUPABASE_URL: "https://sfnaiezkemdjjcbxfuzw.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_tzf_Bhqi-QFGdVtYfKo9dw_QqwXD5hv",

  // Work location — punches are only allowed within RADIUS_METERS of this point
  // (dummy coords, converted from 24°27'29.4"N 88°04'07.5"E)
  WORK_LOCATION: {
    label: "Bhagirathi Diagnostic & Health Care",
    lat: 24.460804,
    lng: 88.073206
  },
  RADIUS_METERS: 30
};
