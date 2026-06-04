import React, { useEffect, useRef, useState } from "react";
import "../Style/GithubStatus.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const USERNAME = "Abuzar448";
gsap.registerPlugin(ScrollTrigger);

const Skeleton = ({ height = "18px", style = {} }) => (
  <div
    style={{
      width: "100%",
      height,
      borderRadius: "6px",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
      ...style,
    }}
  />
);

const cardStyle = {
  background: "rgba(255,255,255,0.01)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "16px",
  padding: "1.5rem",
  flex: 1,
};

const cardTitleStyle = {
  color: "#f0f6fc",
  fontWeight: "600",
  fontSize: "0.95rem",
  margin: "0 0 4px 0",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  paddingBottom: "10px",
};

const statBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.02)",
  borderRadius: "10px",
  padding: "12px 8px",
  gap: "2px",
  textAlign: "center",
};

const CoreStatsCard = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [userRes, reposRes, commitsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
          fetch(`https://api.github.com/search/commits?q=author:${username}`, {
            headers: { Accept: "application/vnd.github.cloak-preview" },
          }),
        ]);
        const user = await userRes.json();
        const repos = await reposRes.json();
        const commits = await commitsRes.json();
        const stars = Array.isArray(repos)
          ? repos.reduce((acc, r) => acc + r.stargazers_count, 0)
          : 0;
        setData({
          stars,
          repos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          commits: commits.total_count ?? 0,
        });
      } catch (_) {}
      setLoading(false);
    };
    fetchAll();
  }, [username]);

  const stats = [
    { label: "Total Stars", value: data?.stars ?? "—", icon: "★" },
    {
      label: "Total Commits",
      value: data?.commits ? data.commits.toLocaleString() : "—",
      icon: "↑",
    },
    { label: "Public Repos", value: data?.repos ?? "—", icon: "⌬" },
    { label: "Followers", value: data?.followers ?? "—", icon: "◎" },
  ];

  return (
    <div style={cardStyle}>
      <p style={cardTitleStyle}>GitHub Stats</p>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "8px",
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} height="52px" />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginTop: "8px",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={statBoxStyle}>
              <span style={{ fontSize: "1.2rem", color: "#1991a3" }}>
                {s.icon}
              </span>
              <span
                style={{ fontSize: "1.3rem", fontWeight: "700", color: "#fff" }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "#8b949e",
                  marginTop: "2px",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TopLangsCard = ({ username }) => {
  const [langs, setLangs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLangs = async () => {
      try {
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
        );
        const repos = await reposRes.json();
        if (!Array.isArray(repos)) {
          setLoading(false);
          return;
        }

        const langMap = {};
        await Promise.all(
          repos.slice(0, 30).map((repo) =>
            fetch(repo.languages_url)
              .then((r) => r.json())
              .then((data) => {
                Object.entries(data).forEach(([lang, bytes]) => {
                  langMap[lang] = (langMap[lang] || 0) + bytes;
                });
              })
              .catch(() => {}),
          ),
        );

        const total = Object.values(langMap).reduce((a, b) => a + b, 0);
        const sorted = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, bytes]) => ({
            name,
            pct: Math.round((bytes / total) * 100),
          }));
        setLangs(sorted);
      } catch (_) {}
      setLoading(false);
    };
    fetchLangs();
  }, [username]);

  const colors = [
    "#1991a3",
    "#34d399",
    "#f59e0b",
    "#a78bfa",
    "#f472b6",
    "#60a5fa",
  ];

  return (
    <div style={cardStyle}>
      <p style={cardTitleStyle}>Top Languages</p>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} height="22px" />
          ))}
        </div>
      ) : langs && langs.length > 0 ? (
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Stacked bar */}
          <div
            style={{
              display: "flex",
              height: "10px",
              borderRadius: "6px",
              overflow: "hidden",
              gap: "2px",
              marginBottom: "4px",
            }}
          >
            {langs.map((l, i) => (
              <div
                key={l.name}
                style={{
                  width: `${l.pct}%`,
                  background: colors[i],
                  transition: "width 0.8s ease",
                }}
              />
            ))}
          </div>
          {/* Legend rows */}
          {langs.map((l, i) => (
            <div
              key={l.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: colors[i],
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span style={{ color: "#c9d1d9", fontSize: "0.85rem" }}>
                  {l.name}
                </span>
              </div>
              <span
                style={{
                  color: "#8b949e",
                  fontSize: "0.8rem",
                  fontFamily: "monospace",
                }}
              >
                {l.pct}%
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: "#8b949e", fontSize: "0.85rem", marginTop: "12px" }}>
          No language data found.
        </p>
      )}
    </div>
  );
};

const GithubStatus = () => {
  const containerRef = useRef(null);
  const handleImgError = (e) => {
    e.target.style.display = "none";
  };

  useGSAP(() => {
    gsap.from(".github-section .github-heading", {
        y: 140,
        opacity: 0,
        ease: "easeInOut",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".github-section .github-heading",
          start: "top 80%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
      gsap.from(".github-section .github-subheading", {
        y: 100,
        opacity: 0,
        ease: "easeInOut",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".github-section .github-subheading",
          start: "top 80%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
      gsap.from(".github-section .github-profile-card", {
        x: -150,
        opacity: 0,
        ease: "easeInOut",
        stagger:4,
        duration: 3,
        scrollTrigger: {
          trigger: ".github-section .github-profile-card",
          start: "top 60%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
      gsap.from(".github-section .github-metrics-container", {
        x: 150,
        opacity: 0,
        ease: "easeInOut",
        duration: 3,
        stagger:4,
        scrollTrigger: {
          trigger: ".github-section .github-metrics-container",
          start: "top 60%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
      gsap.from(".github-section .github-graph-card", {
        y: 150,
        opacity: 0,
        ease: "easeInOut",
        duration: 3,
        stagger:4,
        scrollTrigger: {
          trigger: ".github-section .github-graph-card",
          start: "top 60%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
      gsap.from(".github-stats-row", {
        x: 150,
        opacity: 0,
        ease: "easeInOut",
        duration: 3,
        stagger:4,
        scrollTrigger: {
          markers:true,
          trigger: ".github-stats-row",
          start: "top 60%",
          end: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
  }, { scope: containerRef });

  return (
    <>
      <style>{`@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`}</style>

      <section id="github-status" className="github-section" ref={containerRef}>
        <div className="github-wrapper">
          {/* ── Heading ── */}
          <h2 className="github-heading">
            Open Source <span>Contributions</span>
          </h2>
          <p className="github-subheading">
            Monitored live metrics showcasing code consistency, active commits,
            and core repository architectures.
          </p>

          <div className="github-top-row">
            <div className="github-profile-card">
              <div className="avatar-frame">
                <img
                  src={`https://avatars.githubusercontent.com/${USERNAME}`}
                  alt={`${USERNAME} GitHub Avatar`}
                  loading="lazy"
                  onError={handleImgError}
                />
              </div>
              <h3>Abuzar Khan</h3>
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{USERNAME} <span className="arrow">↗</span>
              </a>
            </div>

            <div className="github-metrics-container">
              <div className="metrics-table-header">
                <h4>Activity Metrics Summary</h4>
                <span className="live-indicator">
                  <span className="pulse"></span> Live Sync
                </span>
              </div>
              <div className="metrics-grid-table">
                <div className="table-row">
                  <span className="metric-label">Current Streak</span>
                  <span className="metric-value">
                    <img
                      src={`https://streak-stats.demolab.com/?user=${USERNAME}&theme=dark&hide_border=true&background=00000000&ring=1991a3&fire=1991a3&currStreakNum=ffffff`}
                      alt="Current Streak"
                      className="streak-badge-mini"
                      loading="lazy"
                      onError={handleImgError}
                    />
                  </span>
                </div>

                <div className="table-row">
                  <span className="metric-label">Longest Streak Tracked</span>
                  <span className="metric-value">
                    <img
                      src={`https://streak-stats.demolab.com/?user=${USERNAME}&theme=dark&hide_border=true&background=00000000&ring=1991a3&fire=1991a3&sideNums=ffffff`}
                      alt="Longest Streak"
                      className="streak-badge-mini"
                      loading="lazy"
                      onError={handleImgError}
                    />
                  </span>
                </div>

                <div className="table-row">
                  <span className="metric-label">Account Verification</span>
                  <span className="metric-value status-verified">
                    Active Developer
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="github-graph-card">
            <div className="card-header">
              <h4>Contribution Heatmap (Past 365 Days)</h4>
            </div>
            <div className="graph-scroll-container">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${USERNAME}&theme=github-compact&bg_color=000000&color=1991a3&line=1991a3&point=ffffff&hide_border=true`}
                alt="GitHub Contribution Graph"
                className="github-graph-img"
                loading="lazy"
                onError={handleImgError}
              />
            </div>
          </div>

          <div className="github-stats-row">
            <div style={{ flex: 1 }}>
              <CoreStatsCard username={USERNAME} />
            </div>
            <div style={{ flex: 1 }}>
              <TopLangsCard username={USERNAME} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GithubStatus;
