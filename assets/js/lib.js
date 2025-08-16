export const listTypeUser = document.querySelectorAll(".user__check");
export const currentClass = "current";

export const checkTypeUser = (listTypeUser, className) => {
    listTypeUser.forEach((user, key) => {
        user.addEventListener("click", (e) => {
            if(key === 0){
                e.currentTarget.classList.add(className);
                listTypeUser[1].classList.remove(className);
                listTypeUser[2].classList.remove(className);
                listTypeUser[3].classList.remove(className);
                listTypeUser[4].classList.remove(className);
            }

            if(key === 1){
                e.currentTarget.classList.add(className);
                listTypeUser[0].classList.remove(className);
                listTypeUser[2].classList.remove(className);
                listTypeUser[3].classList.remove(className);
				listTypeUser[4].classList.remove(className);
            }

            if(key === 2){
                e.currentTarget.classList.add(className);
                listTypeUser[0].classList.remove(className);
                listTypeUser[1].classList.remove(className);
                listTypeUser[3].classList.remove(className);
				listTypeUser[4].classList.remove(className);
            }

            if(key === 3){
                e.currentTarget.classList.add(className);
                listTypeUser[0].classList.remove(className);
                listTypeUser[1].classList.remove(className);
                listTypeUser[2].classList.remove(className);
				listTypeUser[4].classList.remove(className);
            }

            if(key === 4){
                e.currentTarget.classList.add(className);
                listTypeUser[0].classList.remove(className);
                listTypeUser[1].classList.remove(className);
                listTypeUser[2].classList.remove(className);
				listTypeUser[3].classList.remove(className);
            }
        });
    });
}

const sidebarContent = {
	ul: {
		className: "sidebar__navigation navigation",
		li: {
			className: "navigation__navigation-item navigation-item",
			h3: {
				className: "navigation-item__title",
				valEl: [
					"Gestion des personnels", 
					"Gestion des enseignants", 
					"Gestion des parents", 
					"Gestion du élèves",
					"Gestion de la scolarité",
					"Gestion des notes",
				],
			},
			nav: {
				className: "navigation-item__subnavigation subnavigation",
				a: {
					className:
						"subnavigation__subnavigation-item subnavigation-item",
					personals: {
						valEl: [
							"Ajouter un personnel",
							"Liste des personnels",
						],
						href: [
							"/gsc/modules/personals/add-personal.html",
							"/gsc/modules/personals/list-personal.html",
						],
					},
					professors: {
						valEl: [
							"Ajouter un enseignant",
							"Liste des enseignants",
						],
						href: [
							"/gsc/modules/professors/add-prof.html",
							"/gsc/modules/professors/list-prof.html",
						],
					},
					parents: {
						valEl: [
                            "Ajouter un parent",
                            "Liste des parents",
                        ],
						href: [
							"/gsc/modules/parents/add-parent.html",
							"/gsc/modules/parents/list-parent.html",
						],
					},students: {
						valEl: [
                            "Inscrire un élève",
                            "Reinscrire un élève",
                            "Liste des élèves",
                        ],
						href: [
							"/gsc/modules/students/add-student.html",
							"/gsc/modules/students/reinscription-student.html",
							"/gsc/modules/students/list-student.html",
						],
					},
					scolarities: {
						valEl: [
							"Liste des scolarités",
						],
						href: [
							"/gsc/modules/scolarities/list-scolarity.html",
						],
					},
					grades: {
						valEl: [
							"Ajouter des notes",
							"Édition / Liste des notes",
							"Générer les bulletins"
						],
						href: [
							"/gsc/modules/grades/order-grade.html",
							"/gsc/modules/grades/edit-list-grade.html",
							"/gsc/modules/grades/generate-grade.html",
						],
					},
				},
			},
		},
	},
};

export const sidebar = () => {
	// Create ul sidebar-navigation
	const sidebarContainer = document.getElementById("sidebar");
	const ul = document.createElement("ul");

	ul.setAttribute("class", sidebarContent.ul.className);
	ul.setAttribute("id", "sidebar-content-box");
	sidebarContainer.appendChild(ul);

	const sidebarSubNavigationContent = (item, navBlock) => {
		if (
			item === 0 || 
			item === 1 || 
			item === 2 || 
			item === 3 || 
			item === 4 || 
			item === 5
		) {
			// Create nav subnavigation
			const nav = document.createElement("nav");
			nav.setAttribute("class", sidebarContent.ul.li.nav.className);
			let a = 4;
			let b = 6;
			let c = 8;
			let d = 10;
			let e = 12;
			let f = 14;
			let g = 16;
			let h = 19;
			for (let k = 0; k < navBlock.valEl.length; k++) {
				// Create nav subnavigation items
				const subLink = document.createElement("a");
				subLink.setAttribute(
					"class",
					sidebarContent.ul.li.nav.a.className
				);

				let subLinkContent = document.createTextNode(navBlock.valEl[k]);
				subLink.href = navBlock.href[k];
				subLink.appendChild(subLinkContent);

				item === 0 ? subLink.setAttribute("id", `subnavigation-item${k + 1}`) : null;
				ul.appendChild(subLink);

				item === 1
					? subLink.setAttribute("id", `subnavigation-item${a++}`)
					: null;

				item === 2
					? subLink.setAttribute("id", `subnavigation-item${b++}`)
					: null;

				item === 3
					? subLink.setAttribute("id", `subnavigation-item${c++}`)
					: null;

				item === 4
					? subLink.setAttribute("id", `subnavigation-item${d++}`)
					: null;

				item === 5
					? subLink.setAttribute("id", `subnavigation-item${e++}`)
					: null;

				nav.appendChild(subLink);
			}
			return nav;
		}
	};

	const sidebarNavigationContent = () => {
		const personal = sidebarContent.ul.li.nav.a.personals;
		const professor = sidebarContent.ul.li.nav.a.professors;
		const parent = sidebarContent.ul.li.nav.a.parents;
		const student = sidebarContent.ul.li.nav.a.students;
		const scolarity = sidebarContent.ul.li.nav.a.scolarities;
		const grade = sidebarContent.ul.li.nav.a.grades;

		// Create sidebar navigation content
		for (let i = 0; i < sidebarContent.ul.li.h3.valEl.length; i++) {
			const personalSubLi = sidebarSubNavigationContent(i, personal);
			const professorSubLi = sidebarSubNavigationContent(i, professor);
			const parentSubLi = sidebarSubNavigationContent(i, parent);
			const studentSubLi = sidebarSubNavigationContent(i, student);
			const scolaritySubLi = sidebarSubNavigationContent(i, scolarity);
			const gradeSubLi = sidebarSubNavigationContent(i, grade);

			// Create li navigation item
			const li = document.createElement("li");

			li.setAttribute("class", sidebarContent.ul.li.className);

			// Create h3 item title
			const h3 = document.createElement("h3");

			h3.setAttribute("class", sidebarContent.ul.li.h3.className);

			let h3Content = document.createTextNode(
				sidebarContent.ul.li.h3.valEl[i]
			);

			h3.appendChild(h3Content);

			// Grant li by h3
			li.appendChild(h3);

			if (i === 0) {
				li.appendChild(personalSubLi);
			} else {
				if (i === 1) {
					li.appendChild(professorSubLi);
				} else {
					if (i === 2) {
						li.appendChild(parentSubLi);
					} else {
						if (i === 3) {
							li.appendChild(studentSubLi);
						} else {
							if (i === 4) {
								li.appendChild(scolaritySubLi);
							} else {
								if (i === 5) {
									li.appendChild(gradeSubLi);
								} 
							}
						}
					}
				}
			}
			ul.appendChild(li);
		}
	};
	sidebarNavigationContent();
};

export const gscFooterApp = () => {
	const sidebarEl = document.querySelector("#sidebar");
	const sidebarElHeight = sidebarEl.clientHeight;
	const dashboardFooter = document.querySelector("#dashboard-footer");
	dashboardFooter.style.top = `${sidebarElHeight + 50}px`;
}

export const controleForm = () => {
	const lastname = document.querySelector(".lastname");
	const firstname = document.querySelector(".firstname");

    lastname.addEventListener("input", (e) => {
        e.currentTarget.style.textTransform = "uppercase";
    });

	firstname.addEventListener("input", (e) => {
        e.currentTarget.style.textTransform = "capitalize";
    });
}

export const showCustomFieldAmount = () => {
    const tranchesField = document.getElementById("tranches");
    const customAmountField = document.getElementById("custom-amount");
    const inputAmount = customAmountField.querySelector('input[name="other-amount"]');
    
    // Au chargement, cacher le champ et retirer required
    customAmountField.style.display = "none";
    inputAmount.required = false;

    tranchesField.addEventListener("change", () => {
        if (tranchesField.value === "Autre montant") {
            customAmountField.style.display = "block";
            inputAmount.required = true;
        } else {
            customAmountField.style.display = "none";
            inputAmount.required = false;
        }
    });
}

export const gradeEditor = () => {
	// Éditeur de notes
	// Sélectionner tous les boutons "Éditer"
	// et ajouter un gestionnaire d'événement
	// pour basculer entre le mode édition et le mode enregistrement.
	// Utiliser un dataset pour éviter le double-bind.
	// Ajouter une validation des entrées pour s'assurer que les notes sont valides.
	// Afficher un message d'erreur si la note n'est pas valide.

	document.querySelectorAll('.edit-grade').forEach(function (btn) {
		if (btn.dataset.bound === '1') return;
		btn.dataset.bound = '1';

		btn.addEventListener('click', function onEditClick() {
			const row = btn.closest('tr');
			const indices = [7, 8, 9, 11, 12];

			const cells = indices
				.map(i => row.children[i])
				.filter(Boolean);

			const actionCell = btn.closest('td') || row.lastElementChild;
			let errorMsg = actionCell.querySelector('.error-msg');
			if (!errorMsg) {
				errorMsg = document.createElement('div');
				errorMsg.className = 'error-msg';
				errorMsg.style.color = 'red';
				errorMsg.style.fontSize = '13px';
				errorMsg.style.marginTop = '5px';
				errorMsg.style.display = 'none';
				actionCell.appendChild(errorMsg);
			}

			cells.forEach(cell => {
				const val = (cell.textContent || '').trim();
				cell.innerHTML =
				`<input type="number" min="0" max="20" step="0.01" value="${val.replace(',', '.')}" style="width:60px;">`;
			});

			btn.textContent = 'Enregistrer';
			btn.classList.remove('edit-grade');
			btn.classList.add('save-grade');

			function validateInputs() {
				let valid = true;

				cells.forEach(cell => {
					const input = cell.querySelector('input[type="number"]');

					if (!input) { valid = false; return; }

					const value = parseFloat(String(input.value).replace(',', '.'));
					if (Number.isNaN(value) || value < 0 || value > 20) {
						input.style.border = '1px solid red';
						valid = false;
					} else {
						input.style.border = '';
					}
				});

				if (!valid) {
					errorMsg.textContent = 'La note doit être comprise entre 0 et 20.';
					errorMsg.style.display = 'block';
				} else {
					errorMsg.style.display = 'none';
				}
				return valid;
			}

			cells.forEach(cell => {
				const input = cell.querySelector('input[type="number"]');
				if (input) input.addEventListener('input', validateInputs);
			});
			validateInputs();

			btn.removeEventListener('click', onEditClick);
			btn.addEventListener('click', function onSaveClick() {
				if (!validateInputs()) return;

				cells.forEach(cell => {
					const input = cell.querySelector('input[type="number"]');
					if (input) {
						const value = String(input.value).replace(',', '.');
						cell.textContent = value;
					}
				});

				errorMsg.style.display = 'none';
				btn.textContent = 'Éditer';
				btn.classList.remove('save-grade');
				btn.classList.add('edit-grade');

				btn.removeEventListener('click', onSaveClick);
				btn.dataset.bound = '';
				gradeEditor();
			});
		});
	});
}

export const userDropdownMenu = () => {
    const parent = document.querySelector('#menu-left');
    const menu = document.querySelector('#user-dropdown-menu');
	let userItem = true;
	
	parent.addEventListener('click', () => {
    	if (userItem) {
            menu.style.display = 'block';
			console.log("Menu déroulant utilisateur affiché");
			userItem = false;
		} else {
			menu.style.display = 'none';
			console.log("Menu déroulant utilisateur masqué");
			userItem = true;
		}
	});
}

export const logoutUser = () => {
	const logoutBtn = document.querySelector('#logout');
	logoutBtn.addEventListener('click', () => {
		if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
		    window.location.href = '/gsc/modules/logout.php';
			window.alert("Vous avez été déconnecté avec succès.");
			window.location.href = '/gsc/index.html';
			console.log("Déconnexion de l'utilisateur");
		} else {
			console.error("Erreur de déconnexion");
		}
	});
}