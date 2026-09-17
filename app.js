// ==========================================
// SAHNAI SERVICE POINT MATRIMONY
// Main JavaScript
// ==========================================

const SUPABASE_URL = "https://mrzhtybkorajumzunsbr.supabase.co";
const SUPABASE_KEY = "sb_publishable_OpvjMBKiIqL-9tB-k5Xxhw_MkQhWBqz";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storageKey: "sahnai-matrimony-auth"
    }
  }
);


// ==========================================
// Registration
// ==========================================

async function registerUser() {

  const message = document.getElementById("message");

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const full_name = document.getElementById("full_name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const gender = document.getElementById("gender").value;

  if (!email || !password || !full_name || !gender) {
    message.innerText = "कृपया जरूरी जानकारी भरें।";
    return;
  }

  message.innerText = "Registration हो रहा है...";

  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,

    options: {
      data: {
        full_name: full_name,
        mobile: mobile,
        gender: gender,

        date_of_birth:
          document.getElementById("date_of_birth").value,

        age:
          document.getElementById("age").value
            ? Number(document.getElementById("age").value)
            : null,

        marital_status:
          document.getElementById("marital_status").value,

        religion:
          document.getElementById("religion").value.trim(),

        caste:
          document.getElementById("caste").value.trim(),

        mother_tongue:
          document.getElementById("mother_tongue").value.trim(),

        city:
          document.getElementById("city").value.trim(),

        state:
          document.getElementById("state").value.trim(),

        education:
          document.getElementById("education").value.trim(),

        occupation:
          document.getElementById("occupation").value.trim(),

        company:
          document.getElementById("company").value.trim(),

        income:
          document.getElementById("income").value.trim(),

        father_name:
          document.getElementById("father_name").value.trim(),

        mother_name:
          document.getElementById("mother_name").value.trim(),

        siblings:
          document.getElementById("siblings").value.trim(),

        about:
          document.getElementById("about").value.trim(),

        bio:
          document.getElementById("bio").value.trim(),

        partner_age_min:
          document.getElementById("partner_age_min").value
            ? Number(document.getElementById("partner_age_min").value)
            : null,

        partner_age_max:
          document.getElementById("partner_age_max").value
            ? Number(document.getElementById("partner_age_max").value)
            : null,

        partner_education:
          document.getElementById("partner_education").value.trim(),

        partner_occupation:
          document.getElementById("partner_occupation").value.trim(),

        partner_city:
          document.getElementById("partner_city").value.trim(),

        email: email
      }
    }
  });

  if (error) {
    message.innerText =
      "Registration असफल: " + error.message;
    return;
  }

  message.innerText =
    "Registration सफल! ✅ कृपया Email verify करें।";

  document.getElementById("registerForm").reset();
}


// ==========================================
// Registration Form Submit
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("registerForm");

  if (form) {

    form.addEventListener("submit", function (event) {

      event.preventDefault();

      registerUser();

    });

  }

});
