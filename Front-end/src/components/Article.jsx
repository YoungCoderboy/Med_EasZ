import React, { useState } from 'react';
import logo from '../media/news.png'
// Sample news data with 10 elements
const newsData = [
  {
    id: 1,
    image: 'news1.jpg',
    title: 'Sample News 1',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Health',
    sentiment: 'Positive',
  },
  {
    id: 2,
    image: 'news2.jpg',
    title: 'Sample News 2',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Finance',
    sentiment: 'Neutral',
  },
  {
    id: 3,
    image: 'news3.jpg',
    title: 'Sample News 3',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Education',
    sentiment: 'Negative',
  },
  {
    id: 4,
    image: 'news4.jpg',
    title: 'Sample News 4',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Transportation',
    sentiment: 'Positive',
  },
  {
    id: 5,
    image: 'news5.jpg',
    title: 'Sample News 5',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Environment',
    sentiment: 'Neutral',
  },
  {
    id: 6,
    image: 'news6.jpg',
    title: 'Sample News 6',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Finance',
    sentiment: 'Negative',
  },
  {
    id: 7,
    image: 'news7.jpg',
    title: 'Sample News 7',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Education',
    sentiment: 'Positive',
  },
  {
    id: 8,
    image: 'news8.jpg',
    title: 'Sample News 8',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Health',
    sentiment: 'Neutral',
  },
  {
    id: 9,
    image: 'news9.jpg',
    title: 'Sample News 9',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Transportation',
    sentiment: 'Negative',
  },
  {
    id: 10,
    image: 'news10.jpg',
    title: 'Sample News 10',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Environment',
    sentiment: 'Positive',
  },
  {
    id: 11,
    image: 'news1.jpg',
    title: 'Sample News 11',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Health',
    sentiment: 'Positive',
  },
  {
    id: 12,
    image: 'news2.jpg',
    title: 'Sample News 12',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Finance',
    sentiment: 'Neutral',
  },
  {
    id: 13,
    image: 'news3.jpg',
    title: 'Sample News 13',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Education',
    sentiment: 'Negative',
  },
  {
    id: 14,
    image: 'news4.jpg',
    title: 'Sample News 14',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Transportation',
    sentiment: 'Positive',
  },
  {
    id: 15,
    image: 'news5.jpg',
    title: 'Sample News 15',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Health',
    sentiment: 'Neutral',
  },
  {
    id: 16,
    image: 'news6.jpg',
    title: 'Sample News 16',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Finance',
    sentiment: 'Negative',
  },
  {
    id: 17,
    image: 'news7.jpg',
    title: 'Sample News 17',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Education',
    sentiment: 'Positive',
  },
  {
    id: 18,
    image: 'news8.jpg',
    title: 'Sample News 18',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Transportation',
    sentiment: 'Neutral',
  },
  {
    id: 19,
    image: 'news9.jpg',
    title: 'Sample News 19',
    summary: 'This is a sample news article summary.',
    ministry: 'Ministry of Health',
    sentiment: 'Negative',
  },
  {
    id: 20,
    image: 'news10.jpg',
    title: 'Sample News 20',
    summary: 'This is another sample news article summary.',
    ministry: 'Ministry of Finance',
    sentiment: 'Positive',
  },
];

function Article() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [ministryFilter, setMinistryFilter] = useState('All'); // Default to show all ministries
    const [sentimentSort, setSentimentSort] = useState('All'); // Default to no sorting
    const itemsPerPage = 10;
  
    // Apply filters based on search, ministry, and sentiment
    const filteredData = newsData.filter((news) => {
      return (
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (ministryFilter === 'All' || news.ministry === ministryFilter) &&
        (sentimentSort === 'All' || news.sentiment === sentimentSort)
      );
    });
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
    // Ensure currentPage is within a valid range
    const validPage = Math.min(Math.max(currentPage, 1), totalPages);
  
    // Calculate the index of the first and last items to display on the current page
    const indexOfLastItem = validPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
    // Function to handle page changes
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className="App bg-[#25274d] pt-7">
        <div className="mb-4 ml-8">
          <input
            type="text"
            placeholder="Search news..."
            className="px-2 py-1 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="ml-4 px-2 py-1 border rounded"
            value={ministryFilter}
            onChange={(e) => setMinistryFilter(e.target.value)}
          >
            <option value="All">All Ministries</option>
            {/* Replace with actual ministries */}
            <option value="Ministry of Health">Ministry of Health</option>
            <option value="Ministry of Finance">Ministry of Finance</option>
            {/* Add more ministries here */}
          </select>
          <select
            className="ml-4 px-2 py-1 border rounded"
            value={sentimentSort}
            onChange={(e) => setSentimentSort(e.target.value)}
          >
            <option value="All">Filter by Sentiment</option>
            <option value="Positive">Positive</option>
            <option value="Neutral">Neutral</option>
            <option value="Negative">Negative</option>
          </select>
        </div>
        {currentItems.map((news) => (
          <div key={news.id} className="bg-[#464866] p-4 rounded shadow-md flex space-x-4 border-4 border-black  mx-6 mb-7">
            <img src={logo} alt={news.title} className="w-60 h-52 border-4 border-black mr-8" />
            <div className="w-3/4">
              <h2 className="text-3xl font-semibold text-white mb-4">{news.title}</h2>
              <p className="text-white text-l mb-2">{news.summary}</p>
              <p className="text-white text-xl mb-2">Ministry: {news.ministry}</p>
              <p className="text-white text-xl mb-2">Sentiment: {news.sentiment}</p>
            </div>
          </div>
        ))}
        <div className='flex'>
            <div className='text-white mr-8  pt-4 ml-8 text-xl'>
            <h2>Page no : </h2> 
            </div>
            <div className="mt-4 ">
            
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-2 mr-2 rounded ${
                validPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        </div>
      </div>
    );
  }
  
  export default Article;

