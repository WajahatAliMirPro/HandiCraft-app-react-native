// App.js
// Expo React Native single-file prototype for "Baltistan Handicrafts" promotion app.
// Drop this file into a new Expo project (expo init) and run with `expo start`.

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
} from 'react-native';

const SAMPLE_CRAFTS = [
  {
    id: '1',
    title: 'Shigar Wool Shawl',
    short: 'Handwoven wool shawl with Baltistani motifs',
    price: 'PKR 4,500',
    image:
      'https://images.unsplash.com/photo-1519741491624-0f0ed7f0f5d4?auto=format&fit=crop&w=800&q=60',
    description:
      'Traditional handwoven wool shawl made by women artisans from Shigar using natural dyes and local wool.',
  },
  {
    id: '2',
    title: 'Khaplu Embroidered Bag',
    short: 'Small hand-embroidered utility bag',
    price: 'PKR 1,200',
    image:
      'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=60',
    description:
      'Embroidery in traditional patterns using high-quality cotton and reinforced stitching for durability.',
  },
  {
    id: '3',
    title: 'Carved Walnut Box',
    short: 'Hand-carved walnut wood decorative box',
    price: 'PKR 3,800',
    image:
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60',
    description:
      'Skilled woodcarvers from Skardu create delicate patterns inspired by local architecture and nature.',
  },
];

const SAMPLE_ARTISANS = [
  { id: 'a1', name: 'Amina Bibi', craft: 'Shawl weaving', town: 'Shigar' },
  { id: 'a2', name: 'Ghulam Rasool', craft: 'Wood carving', town: 'Skardu' },
  { id: 'a3', name: 'Sofia Ali', craft: 'Embroidery', town: 'Khaplu' },
];

export default function App() {
  const [screen, setScreen] = useState('Home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [modalVisible, setModalVisible] = useState(false);

  function addToCart(item) {
    setCart((c) => [...c, item]);
    Alert.alert('Added to cart', `${item.title} added to cart.`);
  }

  function openEmail() {
    const subject = encodeURIComponent('Inquiry: Baltistan Handicrafts');
    const body = encodeURIComponent('Hello,\n\nI would like more information about...');
    Linking.openURL(`mailto:info@baltistan-crafts.org?subject=${subject}&body=${body}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Baltistan Handicrafts</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => setScreen('Shop')} style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>Shop ({cart.length})</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.nav}>
        {['Home', 'Crafts', 'Artisans', 'About', 'Contact'].map((s) => (
          <TouchableOpacity
            key={s}
            onPress={() => setScreen(s)}
            style={[styles.navItem, screen === s && styles.navItemActive]}
          >
            <Text style={[styles.navText, screen === s && styles.navTextActive]}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.content}>
        {screen === 'Home' && (
          <ScrollView>
            <Hero onExplore={() => setScreen('Crafts')} />
            <Section title="Featured Crafts">
              <FlatList
                data={SAMPLE_CRAFTS}
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
                style={{ paddingVertical: 10 }}
              />
            </Section>

            <Section title="Meet The Artisans">
              {SAMPLE_ARTISANS.map((a) => (
                <View key={a.id} style={styles.artisanRow}>
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

            <Section title="Why this project matters">
              <Text style={styles.paragraph}>
                This project aims to preserve Baltistan's cultural heritage by supporting artisans with
                training, fair market access, and sustainable livelihoods. The app connects buyers,
                tourists, and NGOs with authentic local crafts.
              </Text>
            </Section>
          </ScrollView>
        )}

        {screen === 'Crafts' && (
          <ScrollView>
            <Section title="All Crafts">
              {SAMPLE_CRAFTS.map((c) => (
                <View key={c.id} style={styles.listItem}>
                  <Image source={{ uri: c.image }} style={styles.listImage} />
                  <View style={{ flex: 1, paddingLeft: 10 }}>
                    <Text style={styles.listTitle}>{c.title}</Text>
                    <Text style={styles.listShort}>{c.short}</Text>
                    <View style={styles.rowSpace}>
                      <Text style={styles.price}>{c.price}</Text>
                      <TouchableOpacity onPress={() => addToCart(c)} style={styles.addBtn}>
                        <Text style={styles.addBtnText}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </Section>
          </ScrollView>
        )}

        {screen === 'Artisans' && (
          <ScrollView>
            <Section title="Artisan Profiles">
              {SAMPLE_ARTISANS.map((a) => (
                <View key={a.id} style={styles.card}>
                  <Text style={styles.cardTitle}>{a.name}</Text>
                  <Text style={styles.cardSecondary}>{a.craft} • {a.town}</Text>
                  <Text style={styles.paragraph}>
                    Short bio: Experienced artisan crafting traditional pieces and training younger
                    apprentices in local techniques.
                  </Text>
                </View>
              ))}
            </Section>
          </ScrollView>
        )}

        {screen === 'About' && (
          <ScrollView>
            <Section title="Project Proposal Summary">
              <Text style={styles.paragraph}>
                The app is a digital extension of the Baltistan Handicrafts promotion proposal. It
                helps preserve traditional techniques, provides market linkage, enables training
                updates, and collects social impact data from the community.
              </Text>

              <Text style={styles.subheading}>Objectives</Text>
              <Text style={styles.paragraph}>• Preserve traditional crafts
• Create employment
• Improve quality through training
• Promote locally and internationally</Text>

              <Text style={styles.subheading}>How the app helps</Text>
              <Text style={styles.paragraph}>• Direct shop and enquiries
• Artisan profiles and stories
• Events & training calendar (placeholder)
• Contact and partnership forms</Text>
            </Section>
          </ScrollView>
        )}

        {screen === 'Contact' && (
          <ScrollView>
            <Section title="Contact / Partnership">
              <TextInput
                placeholder="Your name"
                value={contact.name}
                onChangeText={(t) => setContact((s) => ({ ...s, name: t }))}
                style={styles.input}
              />
              <TextInput
                placeholder="Email"
                value={contact.email}
                onChangeText={(t) => setContact((s) => ({ ...s, email: t }))}
                style={styles.input}
                keyboardType="email-address"
              />
              <TextInput
                placeholder="Message"
                value={contact.message}
                onChangeText={(t) => setContact((s) => ({ ...s, message: t }))}
                style={[styles.input, { height: 120 }]}
                multiline
              />

              <TouchableOpacity
                style={styles.primaryBtn}
                onPress={() => {
                  // mimic submission
                  Alert.alert('Thanks', 'Your message was sent. We will reply via email.');
                  setContact({ name: '', email: '', message: '' });
                }}
              >
                <Text style={styles.primaryBtnText}>Send Message</Text>
              </TouchableOpacity>

              <View style={{ marginTop: 12 }}>
                <Text style={styles.paragraph}>Or write to us: info@baltistan-crafts.org</Text>
                <TouchableOpacity onPress={openEmail} style={styles.linkBtn}>
                  <Text style={styles.linkBtnText}>Open email app</Text>
                </TouchableOpacity>
              </View>
            </Section>
          </ScrollView>
        )}
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.linkBtnText}>Close</Text>
            </TouchableOpacity>
          </View>

          {selectedProduct && (
            <ScrollView contentContainerStyle={{ padding: 16 }}>
              <Image source={{ uri: selectedProduct.image }} style={styles.modalImage} />
              <Text style={styles.cardTitle}>{selectedProduct.title}</Text>
              <Text style={styles.paragraph}>{selectedProduct.description}</Text>
              <Text style={[styles.price, { marginVertical: 8 }]}>{selectedProduct.price}</Text>

              <TouchableOpacity
                style={styles.primaryBtn}
                onPress={() => {
                  addToCart(selectedProduct);
                }}
              >
                <Text style={styles.primaryBtnText}>Add to Cart</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© Baltistan Handicrafts • {new Date().getFullYear()}</Text>
      </View>
    </SafeAreaView>
  );
}

function Hero({ onExplore }) {
  return (
    <View style={styles.hero}>
      <Text style={styles.heroTitle}>Keep Baltistan Craft Alive</Text>
      <Text style={styles.heroSubtitle}>Connect with artisans — buy authentic handmade pieces</Text>
      <TouchableOpacity style={styles.primaryBtn} onPress={onExplore}>
        <Text style={styles.primaryBtnText}>Explore Crafts</Text>
      </TouchableOpacity>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={{ paddingHorizontal: 16, marginBottom: 10 }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function ProductCard({ item, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productShort}>{item.short}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7' },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: { fontSize: 18, fontWeight: '700' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  headerBtn: { marginLeft: 8 },
  headerBtnText: { color: '#0a84ff' },
  nav: { flexDirection: 'row', padding: 8, justifyContent: 'space-around', backgroundColor: '#fff' },
  navItem: { padding: 8, borderRadius: 8 },
  navItemActive: { backgroundColor: '#0a84ff' },
  navText: { color: '#333' },
  navTextActive: { color: '#fff' },
  content: { flex: 1 },
  hero: { padding: 16, alignItems: 'center', backgroundColor: '#e9f2ff', margin: 12, borderRadius: 12 },
  heroTitle: { fontSize: 20, fontWeight: '800', marginBottom: 6 },
  heroSubtitle: { textAlign: 'center', marginBottom: 12 },
  primaryBtn: { backgroundColor: '#0a84ff', padding: 12, borderRadius: 10, alignItems: 'center' },
  primaryBtnText: { color: '#fff', fontWeight: '700' },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginVertical: 8 },
  productCard: { width: 220, marginRight: 12, backgroundColor: '#fff', padding: 10, borderRadius: 10 },
  productImage: { width: '100%', height: 120, borderRadius: 8 },
  productTitle: { fontWeight: '700', marginTop: 8 },
  productShort: { fontSize: 12, color: '#555' },
  artisanRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  artisanAvatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  artisanAvatarText: { fontWeight: '700' },
  artisanName: { fontWeight: '700' },
  artisanMeta: { color: '#666' },
  paragraph: { color: '#333', lineHeight: 20 },
  listItem: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10, padding: 10, borderRadius: 10, marginHorizontal: 16 },
  listImage: { width: 90, height: 90, borderRadius: 8 },
  listTitle: { fontWeight: '700' },
  listShort: { fontSize: 12, color: '#666' },
  rowSpace: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  price: { fontWeight: '700' },
  addBtn: { backgroundColor: '#0a84ff', padding: 8, borderRadius: 8 },
  addBtnText: { color: '#fff' },
  card: { backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: '800' },
  cardSecondary: { color: '#666', marginBottom: 8 },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginVertical: 8, marginHorizontal: 0 },
  linkBtn: { marginTop: 8, padding: 8 },
  linkBtnText: { color: '#0a84ff' },
  footer: { padding: 12, alignItems: 'center' },
  footerText: { color: '#999' },
  modalHeader: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'flex-end' },
  modalImage: { width: '100%', height: 220, borderRadius: 10, marginBottom: 12 },
});
