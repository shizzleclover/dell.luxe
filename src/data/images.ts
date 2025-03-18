// This file provides placeholder image paths
// In a real application, these would be actual image files

export const placeholderImages = {
  // Dresses
  'obsidian-gown-1': 'https://images.unsplash.com/photo-1562137369-1a1a0bc66744',
  'obsidian-gown-2': 'https://images.unsplash.com/photo-1566174053879-31528523f8ae',
  'obsidian-gown-3': 'https://images.unsplash.com/photo-1568252542512-9fe8fe6553e8',
  
  'column-dress-1': 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
  'column-dress-2': 'https://images.unsplash.com/photo-1623609163859-ca93c959b98a',
  'column-dress-3': 'https://images.unsplash.com/photo-1539008835657-9830e3331b9a',
  
  'tuxedo-dress-1': 'https://images.unsplash.com/photo-1539008835657-9830e3331b9a',
  'tuxedo-dress-2': 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03',
  'tuxedo-dress-3': 'https://images.unsplash.com/photo-1566174053879-31528523f8ae',
  
  // Suits
  'riviera-suit-1': 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
  'riviera-suit-2': 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660',
  'riviera-suit-3': 'https://images.unsplash.com/photo-1598808503246-fe4b2b72aa04',
  
  'velvet-suit-1': 'https://images.unsplash.com/photo-1592878849122-facb97520f9e',
  'velvet-suit-2': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
  'velvet-suit-3': 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc',
  
  // Jewelry
  'marquise-earrings-1': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
  'marquise-earrings-2': 'https://images.unsplash.com/photo-1611652022419-a9419f74343c',
  'marquise-earrings-3': 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a',
  
  'tennis-bracelet-1': 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e',
  'tennis-bracelet-2': 'https://images.unsplash.com/photo-1599459182681-c938b7f65344',
  'tennis-bracelet-3': 'https://images.unsplash.com/photo-1608042314453-ae338d80c427',
  
  // Coats
  'cashmere-coat-1': 'https://images.unsplash.com/photo-1548624313-0396c75e4b23',
  'cashmere-coat-2': 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
  'cashmere-coat-3': 'https://images.unsplash.com/photo-1553754538-466add009c05',
  
  // Accessories
  'velvet-clutch-1': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
  'velvet-clutch-2': 'https://images.unsplash.com/photo-1601924921557-45e6dea0a157',
  'velvet-clutch-3': 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d',
  
  'silk-scarf-1': 'https://images.unsplash.com/photo-1599709278030-8b8d458e09b2',
  'silk-scarf-2': 'https://images.unsplash.com/photo-1576566885528-3f4ed701fe1d',
  'silk-scarf-3': 'https://images.unsplash.com/photo-1589810264938-1b6bba46205a',
  
  // Footwear
  'leather-boots-1': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
  'leather-boots-2': 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2',
  'leather-boots-3': 'https://images.unsplash.com/photo-1605812830360-f46bbe1f8957',
  
  'evening-sandals-1': 'https://images.unsplash.com/photo-1629730591680-6a216db6fd97',
  'evening-sandals-2': 'https://images.unsplash.com/photo-1596703263926-eb0762ee18a4',
  'evening-sandals-3': 'https://images.unsplash.com/photo-1581101767113-7b6e1bcad90d',
  
  // Category Images
  'category-dresses': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
  'category-suits': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
  'category-jewelry': 'https://images.unsplash.com/photo-1617038220319-276d3cfab638',
  'category-coats': 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2',
  'category-accessories': 'https://images.unsplash.com/photo-1547619292-b592be608d27',
  'category-footwear': 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2',
  
  // Hero Images
  'hero-1': 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
  'hero-2': 'https://images.unsplash.com/photo-1589810264938-1b6bba46205a',
  'hero-3': 'https://images.unsplash.com/photo-1581101767113-7b6e1bcad90d',
};

// Function to get placeholder image URL with parameters for quality/size
export const getPlaceholderImage = (key: string, params = '?w=600&q=80&auto=format&fit=crop') => {
  const baseUrl = placeholderImages[key as keyof typeof placeholderImages];
  if (!baseUrl) {
    console.warn(`Image key "${key}" not found in placeholderImages`);
    // Return a default image when key is not found
    return 'https://images.unsplash.com/photo-1590664863762-bbf2banefea8?w=600&q=80&auto=format&fit=crop';
  }
  return `${baseUrl}${params}`;
}; 