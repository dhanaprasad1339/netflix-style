"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

const avatars = [
  "https://api.dicebear.com/9.x/initials/svg?seed=S&backgroundColor=e50914",
  "https://api.dicebear.com/9.x/initials/svg?seed=D&backgroundColor=564d4d",
  "https://api.dicebear.com/9.x/initials/svg?seed=P&backgroundColor=221f1f",
  "https://api.dicebear.com/9.x/initials/svg?seed=V&backgroundColor=831010",
  "https://api.dicebear.com/9.x/initials/svg?seed=J&backgroundColor=333333",
  "https://api.dicebear.com/9.x/initials/svg?seed=R&backgroundColor=6b0f1a",
];

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState(auth.currentUser);
  const [editing, setEditing] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      router.push("/login");
      return;
    }

    setUser(currentUser);

    setDisplayName(currentUser.displayName || "");

    setSelectedAvatar(
      currentUser.photoURL || avatars[0]
    );
  }, [router]);

  const handleSaveProfile = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      router.push("/login");
      return;
    }

    if (!displayName.trim()) {
      alert("Please enter your name");
      return;
    }

    try {
      setLoading(true);

      await updateProfile(currentUser, {
        displayName: displayName.trim(),
        photoURL: selectedAvatar,
      });

      // Update UI immediately
      setUser({
        ...currentUser,
        displayName: displayName.trim(),
        photoURL: selectedAvatar,
      } as typeof currentUser);

      setEditing(false);

      alert("Profile updated successfully! 🎉");
    } catch (error) {
      console.error("Profile update error:", error);
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <main className="profile-page">

      <div className="profile-container">

        {/* AVATAR */}
        <div className="profile-avatar-container">
          <img
            src={
              editing
                ? selectedAvatar
                : user.photoURL || avatars[0]
            }
            alt="Profile Avatar"
            className="profile-avatar"
          />
        </div>

        {/* TITLE */}
        <h1 className="profile-title">
          {editing ? "Edit Profile" : "My Profile"}
        </h1>

        {/* EMAIL */}
        <p className="profile-email">
          {user.email}
        </p>

        {!editing ? (
          <>
            {/* DISPLAY NAME */}
            <p className="profile-name">
              {user.displayName || "Netflix User"}
            </p>

            {/* EDIT BUTTON */}
            <button
              className="profile-button"
              onClick={() => setEditing(true)}
            >
              ✏️ Edit Profile
            </button>

            {/* CHANGE PASSWORD */}
            <button
              className="profile-button"
              onClick={() => router.push("/forgot-password")}
            >
              🔐 Change Password
            </button>

            {/* MY LIST */}
            <button
              className="profile-button"
              onClick={() => router.push("/my-list")}
            >
              🎬 My List
            </button>

            {/* LOGOUT */}
            <button
              className="profile-button logout-button"
              onClick={async () => {
                const { signOut } = await import("firebase/auth");

                await signOut(auth);
                router.push("/login");
              }}
            >
              🚪 Logout
            </button>
          </>
        ) : (
          <>
            {/* NAME INPUT */}
            <div className="edit-profile-section">

              <label>Display Name</label>

              <input
                type="text"
                value={displayName}
                onChange={(e) =>
                  setDisplayName(e.target.value)
                }
                placeholder="Enter your name"
                className="profile-input"
              />

            </div>

            {/* AVATAR SELECTION */}
            <div className="avatar-section">

              <h3>Choose Avatar</h3>

              <div className="avatar-grid">

                {avatars.map((avatar, index) => (
                  <button
                    key={avatar}
                    onClick={() =>
                      setSelectedAvatar(avatar)
                    }
                    className={`avatar-option ${
                      selectedAvatar === avatar
                        ? "selected-avatar"
                        : ""
                    }`}
                  >
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                    />
                  </button>
                ))}

              </div>

            </div>

            {/* SAVE */}
            <button
              className="save-profile-button"
              onClick={handleSaveProfile}
              disabled={loading}
            >
              {loading ? "Saving..." : "💾 Save Changes"}
            </button>

            {/* CANCEL */}
            <button
              className="cancel-profile-button"
              onClick={() => {
                setEditing(false);

                setDisplayName(
                  user.displayName || ""
                );

                setSelectedAvatar(
                  user.photoURL || avatars[0]
                );
              }}
            >
              Cancel
            </button>
          </>
        )}

      </div>

    </main>
  );
}