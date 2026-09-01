"use server"

export async function createContactInquiry(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const packageId = formData.get("package") as string
  const billingCycle = formData.get("billing") as string || "yearly"
  const teamSize = formData.get("team_size") as string || "25"
  const selectedAddonsRaw = formData.get("selected_addons") as string || "[]"
  const razorpayPaymentId = formData.get("razorpay_payment_id") as string || null
  const amount = formData.get("estimated_total") as string || null

  let selectedAddons = []
  try {
    selectedAddons = JSON.parse(selectedAddonsRaw)
  } catch (e) {
    selectedAddons = []
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_REGISTER_DEMO_URL || "http://127.0.0.1:8000/api/register-demo-company"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        package_id: packageId,
        billing_cycle: billingCycle,
        team_size: parseInt(teamSize, 10),
        selected_addons: selectedAddons,
        razorpay_payment_id: razorpayPaymentId,
        amount: amount ? parseFloat(amount) : null,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("API Error Response:", data);
      return { success: false, error: data.message || "Failed to register demo user", fieldErrors: data.errors }
    }

    return { 
      success: true, 
      credentials: {
        email: data.data.email,
        password: data.data.password,
        company: data.data.company_name,
        subdomain: data.data.subdomain
      }
    }
  } catch (error) {
    console.error("Error creating inquiry:", error)
    return { success: false, error: String(error) }
  }
}

export async function validateContactInquiry(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const packageId = formData.get("package") as string
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_VALIDATE_DEMO_URL || "http://127.0.0.1:8000/api/validate-demo-registration"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        package_id: packageId,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, error: data.message || "Validation failed", fieldErrors: data.errors }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: String(error) }
  }
}

export async function createDemoSubscription(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const packageId = formData.get("package") as string
  const billingCycle = formData.get("billing") as string || "yearly"
  const teamSize = formData.get("team_size") as string || "25"
  const selectedAddonsRaw = formData.get("selected_addons") as string || "[]"
  const amount = formData.get("estimated_total") as string || null

  let selectedAddons = []
  try {
    selectedAddons = JSON.parse(selectedAddonsRaw)
  } catch (e) {
    selectedAddons = []
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:8000";
    const subUrl = process.env.NEXT_PUBLIC_API_CREATE_SUBSCRIPTION_URL || `${baseUrl}/api/create-demo-subscription`;
    const res = await fetch(subUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        package_id: packageId,
        billing_cycle: billingCycle,
        team_size: parseInt(teamSize, 10),
        selected_addons: selectedAddons,
        estimated_total: amount ? parseFloat(amount) : null,
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating demo subscription:", error);
    return { success: false, message: String(error) };
  }
}
