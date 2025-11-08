// App.js
// FINAL: Professionally Redesigned "Baltistan Handicrafts" App
// with Professional Content and Descriptions

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  Modal,
  Pressable,
  Alert,
  Linking,
  StyleSheet,
  StatusBar,
  Platform,
  useWindowDimensions,
} from 'react-native';
// We use icons for the bottom tab bar
import { Feather } from '@expo/vector-icons'; 

// --- Professional Color Palette ---
const COLORS = {
  primary: '#5D4037', // A deep, earthy brown
  primaryLight: '#8D6E63',
  background: '#FBF9F7', // A very light, warm beige
  card: '#FFFFFF',
  text: '#333333',
  textSecondary: '#757575',
  white: '#FFFFFF',
  black: '#000000',
  border: '#E0E0E0',
  whatsapp: '#25D366',
};

// --- App Data with Professional Descriptions ---
const SAMPLE_CRAFTS = [
  {
    id: '1',
    title: 'Gilgiti Cap',
    short: 'Traditional white wool cap with feather',
    price: 'PKR 3,500',
    image: require('./assets/gilgiticap.png'),
    description:
      "An iconic symbol of northern Pakistan, this Patti cap is handcrafted from pure, hand-spun wool. It is soft, warm, and features a traditional rolled brim, elegantly adorned with a peacock feather (Jigha) set in a silver-toned kulladani.",
  },
  {
    id: '2',
    title: 'Hand-Embroidered Shawl',
    short: 'Off-white shawl with colorful border',
    price: 'PKR 5,000',
    image: require('./assets/shawl.png'),
    description:
      "Experience timeless elegance with this hand-woven shawl. Made from fine, locally sourced wool, it features a traditional, vibrant Gharari embroidered border in rich purple and green, finished with a delicate hand-twisted fringe.",
  },
  {
    id: '3',
    title: 'Carved Wooden Pottery',
    short: 'Ornate hand-carved wooden pot',
    price: 'PKR 7,000',
    image: require('./assets/pottery.png'),
    description:
      "A masterpiece of local woodcarving, this decorative pot is skillfully chiseled from durable walnut wood. The intricate floral and leaf patterns are a testament to the artisan's patience and lifelong dedication to their craft.",
  },
  {
    id: '4',
    title: 'Silver & Turquoise Jewelry',
    short: 'Traditional silver jewelry set',
    price: 'PKR 12,000',
    image: require('./assets/silverjewelry.png'),
    description:
      "This stunning, handcrafted silver-plated jewelry set embodies the spirit of the mountains. It features three large, polished turquoise stones, intricately linked and adorned with dangling silver beads for a classic, elegant look.",
  },
  {
    id: '5',
    title: 'Hand-Woven Wicker Baskets',
    short: 'Durable handmade wicker baskets',
    price: 'PKR 1,800',
    image: require('./assets/wickerbasket.png'),
    description:
      "Hand-woven by village artisans using traditional techniques, these willow wicker baskets are both beautiful and durable. Their robust, rustic design is perfect for household storage, as a planter, or for market day.",
  },
  {
    id: '6',
    title: 'Embroidered Wallet',
    short: 'Hand-embroidered blue pattern wallet',
    price: 'PKR 2,200',
    image: require('./assets/woodbag.png'),
    description:
      "A blend of tradition and modern function. This durable wallet is covered in meticulous hand-embroidery, known as Iraghi stitching. The striking blue and beige geometric patterns are a hallmark of Hunza's craft heritage.",
  },
  {
    id: '7',
    title: 'Jute Handbag',
    short: 'Eco-friendly jute bag with strap',
    price: 'PKR 2,000',
    image: require('./assets/handbag.png'),
    description:
      "Both eco-friendly and stylish, this versatile handbag is crafted from natural, resilient jute. It features a colorful, hand-woven central stripe and a comfortable, wide shoulder strap, making it the perfect everyday accessory.",
  },
  {
    id: '8',
    title: 'Traditional Samovar',
    short: 'Engraved metal tea urn (Samovar)',
    price: 'PKR 9,500',
    image: require('./assets/samwar.png'),
    description:
      "A centerpiece of hospitality, this traditional metal Samovar is used for brewing and serving hot tea. It is artfully engraved with detailed floral patterns, showcasing the timeless metalworking skills of Gilgit-Baltistan.",
  },
];

const SAMPLE_ARTISANS = [
  { 
    id: 'a1', 
    name: 'Amina Bibi', 
    craft: 'Shawl weaving', 
    town: 'Shigar',
    bio: "A master weaver from a long line of Shigar artisans, Amina Bibi has been weaving for over 30 years. She specializes in natural dyes and intricate Gharari patterns, passing her invaluable skills to the younger generation."
  },
  { 
    id: 'a2', 
    name: 'Ghulam Rasool', 
    craft: 'Wood carving', 
    town: 'Skardu',
    bio: "Ghulam Rasool is a celebrated woodcarver from Skardu, known for his ability to bring walnut wood to life. His work, which includes ornate bowls, doors, and furniture, is inspired by the natural beauty of the Karakoram."
  },
  { 
    id: 'a3', 
    name: 'Sofia Ali', 
    craft: 'Embroidery', 
    town: 'Khaplu',
    bio: "From the beautiful valley of Khaplu, Sofia Ali leads a women's cooperative focused on fine hand-embroidery. Her delicate Iraghi stitchwork is highly sought after and helps provide a sustainable livelihood for many women in her community."
  },
];

// --- Navigation Items ---
const NAV_ITEMS = [
  { name: 'Home', icon: 'home' },
  { name: 'Crafts', icon: 'shopping-bag' },
  { name: 'Artisans', icon: 'users' },
  { name: 'About', icon: 'info' },
  { name: 'Contact', icon: 'mail' },
];

// --- Reusable Components ---

// Hero Component for Home Screen
function Hero({ onExplore }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.hero, { paddingVertical: width > 400 ? 40 : 20 }]}>
      <Text style={[styles.heroTitle, { fontSize: width > 400 ? 32 : 26 }]}>
        Keep Baltistan Craft Alive
      </Text>
      <Text style={styles.heroSubtitle}>
        Connect with artisans — buy authentic handmade pieces
      </Text>
      <TouchableOpacity style={styles.primaryBtn} onPress={onExplore}>
        <Text style={styles.primaryBtnText}>Explore Crafts</Text>
      </TouchableOpacity>
    </View>
  );
}

// Section Component
function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

// Product Card for Horizontal List
function ProductCard({ item, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.card, styles.productCard, styles.shadow]}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productCardContent}>
        <Text style={styles.productTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.productShort} numberOfLines={1}>{item.short}</Text>
      </View>
    </Pressable>
  );
}

// --- Main App Component ---
export default function App() {
  const [screen, setScreen] = useState('Home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [modalVisible, setModalVisible] = useState(false);

  // --- Linking Functions ---
  async function openLink(url, errorMessage) {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', errorMessage);
      }
    } catch (error) {
      Alert.alert('Error', errorMessage);
    }
  }

  function openEmail() {
    const subject = encodeURIComponent('Inquiry: Baltistan Handicrafts');
    const body = encodeURIComponent('Hello,\n\nI would like more information about...');
    openLink(
      `mailto:info@baltistan-crafts.org?subject=${subject}&body=${body}`,
      'Could not open email app.'
    );
  }

  function openWhatsApp(productName) {
    const phoneNumber = '9237000000';
    const message = `Hello I want to buy this product: ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    openLink(url, 'Make sure WhatsApp is installed on your device.');
  }
  
  // --- Content Rendering ---
  const renderScreen = () => {
    switch (screen) {
      case 'Home':
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Hero onExplore={() => setScreen('Crafts')} />
            <Section title="Featured Crafts">
              <FlatList
                data={SAMPLE_CRAFTS.slice(0, 5)} // Show first 5 as featured
                horizontal
                keyExtractor={(i) => i.id}
                renderItem={({ item }) => (
                  <ProductCard
                    item={item}
                    onPress={() => {
                      setSelectedProduct(item);
                      setModalVisible(true);
                    }}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                style={{ paddingLeft: 20 }} // Start list with padding
              />
            </Section>

            <Section title="Meet Our Artisans">
              {SAMPLE_ARTISANS.map((a) => (
                <View key={a.id} style={[styles.card, styles.artisanRow, styles.shadow]}>
                  <View style={styles.artisanAvatar}>
                    <Text style={styles.artisanAvatarText}>{a.name.split(' ')[0][0]}</Text>
                  </View>
                  <View>
                    <Text style={styles.artisanName}>{a.name}</Text>
                    <Text style={styles.artisanMeta}>{a.craft} • {a.town}</Text>
                  </View>
                </View>
              ))}
            </Section>
          </ScrollView>
        );

      case 'Crafts':
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Section title="All Crafts">
              {SAMPLE_CRAFTS.map((c) => (
                <View key={c.id} style={[styles.card, styles.listItem, styles.shadow]}>
                  <Image source={c.image} style={styles.listImage} />
                  <View style={styles.listItemContent}>
                    <Text style={styles.listTitle}>{c.title}</Text>
                    <Text style={styles.listShort}>{c.short}</Text>
                    <View style={styles.rowSpace}>
                      <Text style={styles.price}>{c.price}</Text>
                      <TouchableOpacity onPress={() => openWhatsApp(c.title)} style={styles.whatsappBtn}>
                        <Text style={styles.whatsappBtnText}>Shop Now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </Section>
          </ScrollView>
        );

      case 'Artisans':
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Section title="Artisan Profiles">
              {SAMPLE_ARTISANS.map((a) => (
                <View key={a.id} style={[styles.card, styles.shadow, { marginBottom: 15 }]}>
                  <View style={styles.artisanRow}>
                     <View style={styles.artisanAvatar}>
                       <Text style={styles.artisanAvatarText}>{a.name.split(' ')[0][0]}</Text>
                     </View>
                     <View>
                       <Text style={styles.artisanName}>{a.name}</Text>
                       <Text style={styles.artisanMeta}>{a.craft} • {a.town}</Text>
                     </View>
                  </View>
                  {/* Replaced placeholder with real bio */}
                  <Text style={styles.paragraph}>{a.bio}</Text>
                </View>
              ))}
            </Section>
          </ScrollView>
        );

      case 'About':
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Replaced "Project Proposal" with "About Us" content */}
            <View style={[styles.card, styles.shadow]}>
              <Section title="Our Mission & Heritage">
                <Text style={styles.paragraph}>
                  Baltistan Handicrafts is more than a marketplace; it is a cultural preservation project. Our mission is to connect the world with the rich artistic heritage of Gilgit-Baltistan, ensuring that these timeless skills are passed down to future generations.
                </Text>

                <Text style={styles.subheading}>Empowering Artisans</Text>
                <Text style={styles.paragraph}>
                  We work directly with master artisans, cooperatives, and families across the region—from Shigar to Khaplu. By providing fair market access and a global platform, we help create sustainable livelihoods, empower local communities (especially women), and ensure that artisans are rightfully compensated for their incredible skill.
                </Text>

                <Text style={styles.subheading}>Authentic Craftsmanship</Text>
                <Text style={styles.paragraph}>
                  Every item in our collection is 100% handmade, carrying a story of its own. From the wool sheared in the mountains to the natural dyes harvested from the land, our products are a direct link to the people and traditions of the Karakoram. We are dedicated to quality, authenticity, and the celebration of true craftsmanship.
                </Text>
              </Section>
            </View>
          </ScrollView>
        );

      case 'Contact':
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.card, styles.shadow]}>
              <Section title="Contact & Partnership">
                <Text style={styles.paragraph}>
                  Have a question or a partnership inquiry? Fill out the form below or send us an email.
                </Text>
                <TextInput
                  placeholder="Your name"
                  value={contact.name}
                  onChangeText={(t) => setContact((s) => ({ ...s, name: t }))}
                  style={styles.input}
                  placeholderTextColor={COLORS.textSecondary}
                />
                <TextInput
                  placeholder="Email"
                  value={contact.email}
                  onChangeText={(t) => setContact((s) => ({ ...s, email: t }))}
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={COLORS.textSecondary}
                />
                <TextInput
                  placeholder="Message"
                  value={contact.message}
                  onChangeText={(t) => setContact((s) => ({ ...s, message: t }))}
                  style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
                  multiline
                  placeholderTextColor={COLORS.textSecondary}
                />

                <TouchableOpacity
                  style={styles.primaryBtn}
                  onPress={() => {
                    Alert.alert('Thanks', 'Your message was sent. We will reply via email.');
                    setContact({ name: '', email: '', message: '' });
                  }}
                >
                  <Text style={styles.primaryBtnText}>Send Message</Text>
                </TouchableOpacity>

                <View style={styles.contactOr}>
                  <View style={styles.contactOrLine} />
                  <Text style={styles.contactOrText}>or</Text>
                  <View style={styles.contactOrLine} />
                </View>
                
                <Text style={styles.paragraph}>Write to us directly:</Text>
                <TouchableOpacity onPress={openEmail} style={styles.linkBtn}>
                  <Text style={styles.linkBtnText}>info@baltistan-crafts.org</Text>
                </TouchableOpacity>
              </Section>
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
      {/* --- Header --- */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Baltistan Handicrafts</Text>
      </View>

      {/* --- Content --- */}
      <View style={styles.content}>{renderScreen()}</View>

      {/* --- Bottom Tab Navigation --- */}
      <View style={styles.navContainer}>
        {NAV_ITEMS.map((item) => {
          const isActive = screen === item.name;
          return (
            <TouchableOpacity
              key={item.name}
              onPress={() => setScreen(item.name)}
              style={styles.navTab}
            >
              <Feather
                name={item.icon}
                size={24}
                color={isActive ? COLORS.primary : COLORS.textSecondary}
              />
              <Text style={[styles.navText, isActive && styles.navTextActive]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* --- Product Modal --- */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true} 
        presentationStyle="overFullScreen" 
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalBackdrop} onPress={() => setModalVisible(false)} />
        <View style={styles.modalContainer}>
          <StatusBar barStyle="light-content" />
          <View style={styles.modalHandle} />
          
          {selectedProduct && (
            <ScrollView>
              <Image source={selectedProduct.image} style={styles.modalImage} />
              
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
                <Text style={styles.modalPrice}>{selectedProduct.price}</Text>
                <Text style={styles.modalDescription}>{selectedProduct.description}</Text>

                <TouchableOpacity
                  style={[styles.primaryBtn, styles.whatsappBtn, { marginTop: 20 }]}
                  onPress={() => {
                    openWhatsApp(selectedProduct.title);
                  }}
                >
                  <Text style={styles.primaryBtnText}>Shop Now on WhatsApp</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// --- Stylesheet ---
const styles = StyleSheet.create({
  // --- Core Layout ---
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    paddingBottom: 80, // Space for the bottom nav bar
  },
  content: { 
    flex: 1,
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // --- Header ---
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    alignItems: 'center',
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: '600',
    color: COLORS.primary,
  },
  
  // --- Bottom Tab Navigation ---
  navContainer: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 80 : 65, // Taller on iOS for home bar
    paddingBottom: Platform.OS === 'ios' ? 15 : 0,
    backgroundColor: COLORS.card,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
  },
  navTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  navTextActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  // --- Reusable Components ---
  primaryBtn: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16,
  },
  whatsappBtn: {
    backgroundColor: COLORS.whatsapp,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  whatsappBtnText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 14,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginHorizontal: 20, // Consistent horizontal margin
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 15,
  },
  paragraph: {
    color: COLORS.text,
    lineHeight: 22,
    fontSize: 15,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: 15,
    marginBottom: 5,
  },

  // --- Home Screen ---
  hero: {
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight,
    margin: 20,
    borderRadius: 16,
  },
  heroTitle: {
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
    color: COLORS.white,
  },
  heroSubtitle: {
    textAlign: 'center',
    marginBottom: 16,
    color: COLORS.white,
    fontSize: 16,
  },
  productCard: {
    width: 240,
    marginRight: 15,
    marginLeft: 0, // Reset margin for FlatList
  },
  productImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'cover',
  },
  productCardContent: {
    padding: 12,
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.text,
  },
  productShort: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  artisanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 12,
  },
  artisanAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  artisanAvatarText: {
    fontWeight: '700',
    color: COLORS.white,
    fontSize: 18,
  },
  artisanName: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.text,
  },
  artisanMeta: {
    color: COLORS.textSecondary,
  },

  // --- Crafts Screen ---
  listItem: {
    flexDirection: 'row',
    marginBottom: 12,
    padding: 10,
  },
  listImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: COLORS.border,
  },
  listItemContent: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'space-between',
  },
  listTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.text,
  },
  listShort: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontWeight: '700',
    fontSize: 15,
    color: COLORS.primary,
  },

  // --- Contact Screen ---
  input: {
    backgroundColor: COLORS.background,
    padding: 14,
    borderRadius: 8,
    marginVertical: 8,
    fontSize: 16,
    borderColor: COLORS.border,
    borderWidth: 1,
    color: COLORS.text,
  },
  linkBtn: {
    marginTop: 8,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  linkBtnText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  contactOr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  contactOrLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  contactOrText: {
    marginHorizontal: 10,
    color: COLORS.textSecondary,
  },

  // --- Modal Screen ---
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: '85%', // Ensure it doesn't cover the whole screen
    backgroundColor: COLORS.card,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  modalHandle: {
    width: 50,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.border,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  modalContent: {
    padding: 20,
    paddingBottom: 40, // Extra padding at the bottom
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 5,
  },
  modalPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
});