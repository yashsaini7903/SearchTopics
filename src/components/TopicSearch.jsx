import React, { useState } from "react";
import topics from "../data/topics";
import "./TopicSearch.css";

const TopicSearch = () => {
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header className="ts-header">
        <h2 className="ts-title">Search Topics</h2>

        <input
          type="text"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ts-search"
        />
      </header>
     
      <div className="ts-container">
        <div className="ts-list">
          {filteredTopics.length === 0 ? (
            <p className="ts-no-data">No topics found</p>
          ) : (
            filteredTopics.map((topic) => (
              <div key={topic.id} className="ts-card">
                <h3>{topic.name}</h3>
                <span>{topic.category}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default TopicSearch;
