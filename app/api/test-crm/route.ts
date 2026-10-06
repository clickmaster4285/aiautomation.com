import { NextResponse } from "next/server";

export async function GET() {
  try {
    const baseUrl = process.env.CRM_URL!;
    const email = process.env.CRM_EMAIL!;
    const password = process.env.CRM_PASSWORD!;

    // 1. Login to CRM
    const loginRes = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!loginRes.ok) {
      const errorText = await loginRes.text();
      return NextResponse.json(
        { error: "Login failed", status: loginRes.status, details: errorText },
        { status: 500 }
      );
    }

    const loginData = await loginRes.json();
    const token = loginData.data?.token || loginData.token;

    if (!token) {
      return NextResponse.json(
        { error: "No token received", loginData },
        { status: 500 }
      );
    }

    // 2. Call a protected endpoint
    const meRes = await fetch(`${baseUrl}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const meData = await meRes.json();

    return NextResponse.json({
      success: true,
      message: "Connected to CRM successfully!",
      user: meData,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Connection failed", details: error.message },
      { status: 500 }
    );
  }
}